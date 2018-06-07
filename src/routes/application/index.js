const about = require('./about')
const home = require('./home')

module.exports = router => {
  router.get('/', home())
  router.get('/about', about())

  return router;
}
