const router = require('express').Router()

const edit = require('./edit')
const get = require('./get')
const update = require('./update')

module.exports = (Acolhido, router) => {
  router.get('/acolhido/lista', list(Acolhido))
  router.get('/acolhido/:acolhido_id', get(Acolhido))
  router.get('/acolhido/:acolhido_id/edit', edit(Acolhido))
  router.post('/acolhido/:acolhido_id/edit', update(Acolhido))

  return router;
}

