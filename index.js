#!/usr/bin/env node

var fs = require("fs")
var words = {}
var firstWordRegex = new RegExp(/^([\w\-]+),/)

fs
  .readFileSync(__dirname + "/words.txt")
  .toString()
  .split("\n")
  .forEach(function(line) {
    if (line.match(firstWordRegex)) {
      words[line.match(firstWordRegex)[1]] = line
    }
  })

var moby = module.exports = {}

moby.search = function(word) {
  word = word.toLowerCase()
  var result = words[word]
  if (result) {
    return(result)
  } else {
    return("No match for " + word)
  }
}

if (!module.parent) {
  if (process.argv.length < 3) {
    console.log("\nUsage: moby <term>\n")
  } else if (process.argv.length >= 3) {
    var word = process.argv.slice(2).join(" ")
    console.log(moby.search(word))
  }
}
