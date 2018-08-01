const about = require('./about')
const error = require('./error')
const home = require('./home')

module.exports = router => {
  router.get('/', home())
  router.get('/about', about())
  router.get('/404', error())

  return router
}