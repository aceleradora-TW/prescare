const get = require('./get')
const list = require('./listaAcolhidos')
const edit = require('./edit')
const update = require('./update')
const create = require('./create')
const destroy = require('./destroy')

module.exports = (Acolhido, Prescricao, router) => {
  router.get('/acolhido/:acolhido_id', get(Acolhido, Prescricao))
  router.get('/lista-acolhidos', list(Acolhido, Prescricao))
  router.get('/acolhido/:acolhido_id/edit', edit(Acolhido))
  router.post('/acolhido/:acolhido_id/edit', update(Acolhido))
  router.post('/acolhido/novo', create(Acolhido))
  router.post('/acolhido/:acolhido_id/excluir', destroy(Acolhido))
 
  return router
}