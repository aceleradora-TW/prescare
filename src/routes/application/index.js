const about = require('./about')
const home = require('./home')
const error = require('./error')

module.exports = router => {
  router.get('/', home())
  router.get('/about', about())
  
  return router;
}
