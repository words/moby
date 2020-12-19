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

app.get('/search', async (req, res) => {
  return res.redirect(`/${req.query.q}`)
})

app.get('/:query', async (req, res, next) => {
  const q = req.params.query
  res.render('search', {
    q,
    searchResults: moby.search(q),
    reverseSearchResults: moby.reverseSearch(q)
  })
})


if (!module.parent) {
  app.listen(app.get('port'), function () {
    console.log('Moby is running at localhost:' + app.get('port'))
  })
}
