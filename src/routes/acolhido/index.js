
const router = require('express').Router()

const edit = require('./edit')
const get = require('./get')
const update = require('./update')
const list = require('./listaAcolhidos')

module.exports = (Acolhido, router) => {
  router.get('/listaAcolhidos', list(Acolhido))
  router.get('/acolhido/:acolhidoId', get(Acolhido))
  router.get('/acolhido/:acolhidoId/edit', edit(Acolhido))
  router.post('/acolhido/:acolhidoId/edit', update(Acolhido))

  return router;
}