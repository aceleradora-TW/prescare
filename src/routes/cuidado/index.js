const router = require('express').Router()

const get = require('./get')

module.exports = Cuidado => {
  router.get('/:cuidado_id', get(Cuidado))

  return router;
}