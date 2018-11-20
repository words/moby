#!/usr/bin/env node

var fs = require('fs')
var path = require('path')
var thesaurus = require('thesaurus')
var union = require('lodash.union')
var words = new Map()
var firstWordRegex = new RegExp(/^([\w\-]+),/)
var moby = module.exports = {}

fs.readFileSync(path.join(__dirname, 'words.txt'))
  .toString()
  .split('\n')
  .forEach(function (line) {
    if (line.match(firstWordRegex)) {
      words.set(line.match(firstWordRegex)[1], line.replace(firstWordRegex, ''))
    }
  })

moby.search = function (term) {
  if (!term) return []
  var result = words.get(term)
  if (!result) result = words.get(term.toLowerCase())
  if (!result) return []
  result = result.split(',')
  result = union(result, thesaurus.find(term))
  return result
}

moby.reverseSearch = function (term) {
  if (!term) return []
  return Array.from(words.keys()).filter(function (w) {
    return words.get(w).match(new RegExp(',' + term + ',', 'i'))
  })
}

if (!module.parent) {
  if (process.argv.length < 3) {
    console.log('\nUsage: moby <term>\n')
  } else if (process.argv.length >= 3) {
    var word = process.argv.slice(2).join(' ')
    var searchResults = moby.search(word)
    var reverseSearchResults = moby.reverseSearch(word)

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
