const router = require('express').Router()

const edit = require('./edit')
const get = require('./get')
const update = require('./update')
const list = require('./list')

module.exports = (Acolhido, Prescricao, router) => {
  router.get('/acolhido/lista', list(Acolhido))
  router.get('/acolhido/:acolhido_id', get(Acolhido, Prescricao))
  router.get('/acolhido/:acolhido_id/edit', edit(Acolhido))
  router.post('/acolhido/:acolhido_id/edit', update(Acolhido))
  return router;
}

