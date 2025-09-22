#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const http = require('http')
const puppeteer = require('puppeteer')

const app = require('../server.js')

const BUILD_DIR = path.join(__dirname, '../dist')
const PORT = process.env.BUILD_PORT || 3456

// Get all words from the thesaurus data
function getAllWords () {
  const wordsFile = fs.readFileSync(path.join(__dirname, '../words.txt'), 'utf8')
  const words = new Set()

  wordsFile.split('\n').forEach(line => {
    if (line.trim()) {
      const match = line.match(/^([\w-]+),/)
      if (match) {
        words.add(match[1])
      }
    }
  })

  return Array.from(words)
}

// Create output directory
function setupBuildDir () {
  if (fs.existsSync(BUILD_DIR)) {
    fs.rmSync(BUILD_DIR, { recursive: true })
  }
  fs.mkdirSync(BUILD_DIR, { recursive: true })

  // Copy static assets
  const publicDir = path.join(__dirname, '../public')
  const staticDir = path.join(BUILD_DIR)

  function copyDir (src, dest) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true })
    }

    const items = fs.readdirSync(src)
    items.forEach(item => {
      const srcPath = path.join(src, item)
      const destPath = path.join(dest, item)

      if (fs.statSync(srcPath).isDirectory()) {
        copyDir(srcPath, destPath)
      } else {
        fs.copyFileSync(srcPath, destPath)
      }
    })
  }

  copyDir(publicDir, staticDir)
}

// Scrape a single page
async function scrapePage (page, url, outputPath) {
  try {
    await page.goto(url, {
      waitUntil: 'domcontentloaded',
      timeout: 10000
    })
    const html = await page.content()

    // Ensure directory exists
    const dir = path.dirname(outputPath)
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true })
    }

    // Fix relative URLs to work as static files
    const depth = outputPath.split('/').length - BUILD_DIR.split('/').length - 1
    const prefix = depth > 0 ? '../'.repeat(depth) : './'

    const fixedHtml = html
      .replace(/href="\//g, `href="${prefix}`)
      .replace(/src="\//g, `src="${prefix}`)
      .replace(/action="\/search"/g, `action="${prefix}search.html"`)
      .replace(/href="\/([^"]+)"/g, `href="${prefix}$1/index.html"`)

    fs.writeFileSync(outputPath, fixedHtml)
  } catch (error) {
    console.error(`Error scraping ${url}:`, error.message)
    // Don't fail the entire build for one page
  }
}

async function build () {
  console.log('Starting static site generation...')

  // Setup build directory
  setupBuildDir()

  // Start the server
  const server = http.createServer(app)
  server.listen(PORT)
  console.log(`Server running on port ${PORT}`)

  try {
    // Launch puppeteer with optimizations for CI
    const browser = await puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
    })
    const page = await browser.newPage()

    // Optimize page settings for faster scraping
    await page.setRequestInterception(true)
    page.on('request', (req) => {
      // Block unnecessary resources to speed up page loads
      if (req.resourceType() === 'stylesheet' || req.resourceType() === 'image' || req.resourceType() === 'font') {
        req.abort()
      } else {
        req.continue()
      }
    })

    const baseUrl = `http://localhost:${PORT}`

    // Scrape homepage
    await scrapePage(page, baseUrl, path.join(BUILD_DIR, 'index.html'))

    // Get all words and scrape their pages
    const words = getAllWords()
    console.log(`Found ${words.length} words to generate pages for`)

    let processed = 0
    for (const word of words) {
      const url = `${baseUrl}/${encodeURIComponent(word)}`
      const outputPath = path.join(BUILD_DIR, word, 'index.html')

      await scrapePage(page, url, outputPath)

      processed++
      if (processed % 500 === 0) {
        console.log(`Progress: ${processed}/${words.length} (${Math.round(processed / words.length * 100)}%)`)
      }
    }

    console.log('Static site generation complete!')

    await browser.close()
  } catch (error) {
    console.error('Build failed:', error)
    process.exit(1)
  } finally {
    server.close()
  }
}

if (require.main === module) {
  build()
}

module.exports = { build }
