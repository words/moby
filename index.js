#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const thesaurus = require('thesaurus')
const union = require('lodash.union')
const words = {}
const firstWordRegex = /^([\w-]+),/
const moby = module.exports = {}

fs.readFileSync(path.join(__dirname, 'words.txt'))
  .toString()
  .split('\n')
  .forEach(function (line) {
    if (line.match(firstWordRegex)) {
      words[line.match(firstWordRegex)[1]] = line.replace(firstWordRegex, '')
    }
  })

moby.search = function (term) {
  if (!term) return []
  let result = words[term]
  if (!result) result = words[term.toLowerCase()]
  if (!result) return []
  result = result.split(',')
  result = union(result, thesaurus.find(term))
  return result
}

moby.reverseSearch = function (term) {
  if (!term) return []
  return Object.keys(words).filter(function (w) {
    return words[w].match(new RegExp(',' + term + ',', 'i'))
  })
}

if (!module.parent) {
  if (process.argv.length < 3) {
    console.log('\nUsage: moby <term>\n')
  } else if (process.argv.length >= 3) {
    const word = process.argv.slice(2).join(' ')
    const searchResults = moby.search(word)
    const reverseSearchResults = moby.reverseSearch(word)

    if (searchResults.length > 0) {
      console.log('\n' + searchResults.join(', '))
    } else {
      console.log('\nNo match found')
    }

    if (reverseSearchResults.length > 0) {
      console.log('\nSee also:')
      console.log(reverseSearchResults.join(', '))
    }
  }
}
