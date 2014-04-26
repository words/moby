var assert = require('assert')
var moby = require('..')

describe("moby", function() {

  describe(".search(word)", function() {

    it("returns search results", function(){
      assert(moby.search("dog").match(/hound/))
    })

    it("returns a message if no results were found", function(){
      assert(moby.search("doggg").match(/no match/i))
    })

  })

})
