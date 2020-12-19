document.addEventListener('DOMContentLoaded', function (event) {
  document.querySelector('#q').focus()

  var _gauges = _gauges || []; // eslint-disable-line
  (function () {
    const t = document.createElement('script')
    t.type = 'text/javascript'
    t.async = true
    t.id = 'gauges-tracker'
    t.setAttribute('data-site-id', '5fdd5b6c1d04c241c2856e6f')
    t.setAttribute('data-track-path', 'https://track.gaug.es/track.gif')
    t.src = 'https://d2fuc4clr7gvcn.cloudfront.net/track.js'
    const s = document.getElementsByTagName('script')[0]
    s.parentNode.insertBefore(t, s)
  })()
})
