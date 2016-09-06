var path = require('path')
var moby = require('./')
var express = require('express')
var app = module.exports = express()

app.set('port', (process.env.PORT || 5000))
app.use(express.static(path.join(__dirname, '/public')))

app.use('/', express.static('public'))
app.set('view engine', 'jade')

app.get('/', function (req, res) {
  res.render('index')
})

app.get('/search', function (req, res) {
  res.render('search', {
    q: req.query.q,
    searchResults: moby.search(req.query.q),
    reverseSearchResults: moby.reverseSearch(req.query.q)
  })
})

if (!module.parent) {
  app.listen(app.get('port'), function () {
    console.log('Moby is running at localhost:' + app.get('port'))
  })
}
