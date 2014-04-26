#!/usr/bin/env node

var fs = require("fs")
var words = {}
var firstWordRegex = new RegExp(/^([\w\-]+),/)
var moby = module.exports = {}

fs.readFileSync(__dirname + "/words.txt")
  .toString()
  .split("\n")
  .forEach(function(line) {
    if (line.match(firstWordRegex)) {
      words[line.match(firstWordRegex)[1]] = line
    }
  })

moby.search = function(term) {
  if (!term) return []
  var result = words[term]
  return result ? result.split(",") : []
}

moby.reverseSearch = function(term) {
  if (!term) return []
  return Object.keys(words).filter(function(w){
    return words[w].match(","+term+",")
  })
}

if (!module.parent) {
  if (process.argv.length < 3) {
    console.log("\nUsage: moby <term>\n")
  } else if (process.argv.length >= 3) {
    var word = process.argv.slice(2).join(" ")
    var searchResults = moby.search(word)
    var reverseSearchResults = moby.reverseSearch(word)

    if (searchResults.length > 0) {
      console.log("\n" + searchResults.join(", "))
    } else {
      console.log("\nNo match found")
    }

    if (reverseSearchResults.length > 0) {
      console.log("\nSee also:")
      console.log(reverseSearchResults.join(", "))
    }
  }
}
