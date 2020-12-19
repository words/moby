const path = require('path')
const moby = require('./')
const express = require('express')
const app = module.exports = express()

app.set('port', (process.env.PORT || 5000))
app.use(express.static(path.join(__dirname, '/public')))
app.use('/', express.static('public'))
app.set('view engine', 'pug')

// redirect HTTP requests to HTTPS
app.get('*', (req, res, next) => {
  if (process.env.NODE_ENV === 'production' && req.headers['x-forwarded-proto'] !== 'https') {
    res.redirect('https://moby-thesaurus.org' + req.url)
  } else {
    next()
  }
})

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
