const router = require('express').Router()

const get = require('./get')

module.exports = Medicamento => {
  router.get('/medicamento', get(Medicamento))

  return router;
}
