var assert = require('assert')
var util = require('util')
var moby = require('..')

describe('moby', function () {
  describe('.search(word)', function () {
    it('returns an array of search results', function () {
      var result = moby.search('dog')
      assert(util.isArray(result))
      assert(result.length > 0)
    })

    it('is case insensitive', function () {
      var result = moby.search('DOG')
      assert(util.isArray(result))
      assert(result.length > 0)
    })

    it('includes word strings in the array', function () {
      var result = moby.search('dog')
      assert(result.indexOf('hound') > -1)
      assert(result.indexOf('pup') > -1)
      assert(result.indexOf('paw') > -1)
    })

    it('returns an empty array if no results are found', function () {
      var result = moby.search('doggg')
      assert(util.isArray(result))
      assert.equal(result.length, 0)
    })

    it('returns an empty array when given an empty string', function () {
      var result = moby.search('')
      assert(util.isArray(result))
      assert.equal(result.length, 0)
    })

    it('returns an empty array when search term is null or omitted', function () {
      var result = moby.search()
      assert(util.isArray(result))
      assert.equal(result.length, 0)
    })

    it('removes the search term itself from the results', function () {
      var result = moby.search('dog')
      assert(result.indexOf('dog') === -1)
    })
  })

  describe('.reverseSearch(word)', function () {
    it('returns an array of search results', function () {
      var result = moby.reverseSearch('smaragdine')
      assert(util.isArray(result))
      assert(result.length > 0)
    })

    it('is case insensitive', function () {
      var result = moby.reverseSearch('SMARAGDINE')
      assert(util.isArray(result))
      assert.equal(result.length, moby.reverseSearch('smaragdine').length)
    })

    it('includes words that contain the search word as a synomym', function () {
      var result = moby.reverseSearch('smaragdine')
      assert(result.indexOf('grassy') > -1)
      assert(result.indexOf('olive') > -1)
      assert(result.indexOf('verdant') > -1)
    })

    it('returns an empty array if no results are found', function () {
      var result = moby.reverseSearch('xkoiusdfdslkmm')
      assert(util.isArray(result))
      assert.equal(result.length, 0)
    })

    it('returns an empty array when given an empty string', function () {
      var result = moby.reverseSearch('')
      assert(util.isArray(result))
      assert.equal(result.length, 0)
    })

    it('returns an empty array when search term is null or omitted', function () {
      var result = moby.reverseSearch()
      assert(util.isArray(result))
      assert.equal(result.length, 0)
    })
  })
})
