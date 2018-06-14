
const router = require('express').Router()

const get = require('./get')
const list = require('./listaAcolhidos')
const edit = require('./edit')
const update = require('./update')

module.exports = (Acolhido, router) => {
  router.get('/acolhido/:acolhido_id', get(Acolhido));
  router.get('/lista-acolhidos', list(Acolhido));
  router.get('/acolhido/:acolhido_id/edit', edit(Acolhido));
  router.post('/acolhido/:acolhido_id/edit', update(Acolhido));

  return router;
}