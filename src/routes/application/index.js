const router = require('express').Router()

const about = require('./about')
const home = require('./home')

module.exports = () => {
  router.get('/', home())
  router.get('/about', about())

  return router;
}
