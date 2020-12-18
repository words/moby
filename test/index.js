const assert = require('assert')
const moby = require('..')

describe('moby', function () {
  describe('.search(word)', function () {
    it('returns an array of search results', function () {
      const result = moby.search('dog')
      assert(Array.isArray(result))
      assert(result.length > 0)
    })

    it('is case insensitive', function () {
      const result = moby.search('DOG')
      assert(Array.isArray(result))
      assert(result.length > 0)
    })

    it('includes word strings in the array', function () {
      const result = moby.search('dog')
      assert(result.indexOf('hound') > -1)
      assert(result.indexOf('pup') > -1)
      assert(result.indexOf('paw') > -1)
    })

    it('returns an empty array if no results are found', function () {
      const result = moby.search('doggg')
      assert(Array.isArray(result))
      assert.equal(result.length, 0)
    })

    it('returns an empty array when given an empty string', function () {
      const result = moby.search('')
      assert(Array.isArray(result))
      assert.equal(result.length, 0)
    })

    it('returns an empty array when search term is null or omitted', function () {
      const result = moby.search()
      assert(Array.isArray(result))
      assert.equal(result.length, 0)
    })

    it('removes the search term itself from the results', function () {
      const result = moby.search('dog')
      assert(result.indexOf('dog') === -1)
    })
  })

  describe('.reverseSearch(word)', function () {
    it('returns an array of search results', function () {
      const result = moby.reverseSearch('smaragdine')
      assert(Array.isArray(result))
      assert(result.length > 0)
    })

    it('is case insensitive', function () {
      const result = moby.reverseSearch('SMARAGDINE')
      assert(Array.isArray(result))
      assert.equal(result.length, moby.reverseSearch('smaragdine').length)
    })

    it('includes words that contain the search word as a synomym', function () {
      const result = moby.reverseSearch('smaragdine')
      assert(result.indexOf('grassy') > -1)
      assert(result.indexOf('olive') > -1)
      assert(result.indexOf('verdant') > -1)
    })

    it('returns an empty array if no results are found', function () {
      const result = moby.reverseSearch('xkoiusdfdslkmm')
      assert(Array.isArray(result))
      assert.equal(result.length, 0)
    })

    it('returns an empty array when given an empty string', function () {
      const result = moby.reverseSearch('')
      assert(Array.isArray(result))
      assert.equal(result.length, 0)
    })

    it('returns an empty array when search term is null or omitted', function () {
      const result = moby.reverseSearch()
      assert(Array.isArray(result))
      assert.equal(result.length, 0)
    })
  })
})
