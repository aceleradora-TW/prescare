const about = require('./about')
const home = require('./home')
const error = require('./error')
const middleware = require('./middleware')

module.exports = router => {
  router.use(middleware())
  router.get('/', home())
  router.get('/about', about())
  router.get('/404', error())

  return router;
}
