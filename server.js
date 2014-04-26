var moby = require('./')
var express = require('express')
var logfmt = require('logfmt')
var merge = require('merge')
var cors = require('cors')
var app = module.exports = express()

if (process.env.NODE_ENV !== "test") app.use(logfmt.requestLogger())
app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))


app.use('/', express.static('public'))
app.set('view engine', 'jade')

app.get('/', cors(), function(req, res) {
  res.render('index')
})

app.get('/search', cors(), function(req, res) {
  res.render('search', {
    q: req.query.q,
    searchResults: moby.search(req.query.q),
    reverseSearchResults: moby.reverseSearch(req.query.q)
  })
})

if (!module.parent) {
  app.listen(app.get('port'), function() {
    console.log("Moby is running at localhost:" + app.get('port'))
  })
}
