const router = require('express').Router()

const get = require('./get')
const list = require('./list')

module.exports = Acolhido => {
  router.get('/:acolhido_id', get(Acolhido))
  router.get('/list', list(Acolhido))

  return router;
}
