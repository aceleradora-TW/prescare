
const create = require('./create')
const get = require('./get')
const edit = require('./edit')
const update = require('./update')
const destroy = require('./destroy')

module.exports = (Cuidado, router) => {
  router.post('/acolhido/:acolhido_id/prescricao/:prescricao_id/edit/cuidado', create(Cuidado))
  router.get('/acolhido/:acolhido_id/prescricao/:prescricao_id/edit/cuidado/:cuidado_id/', get(Cuidado))
  router.get('/acolhido/:acolhido_id/prescricao/:prescricao_id/edit/cuidado/:cuidado_id/edit', edit(Cuidado))
  router.post('/acolhido/:acolhido_id/prescricao/:prescricao_id/edit/cuidado/:cuidado_id/edit', update(Cuidado))
  router.post('/acolhido/:acolhido_id/prescricao/:prescricao_id/edit/cuidado/:cuidado_id/edit/excluir', destroy(Cuidado))
  return router;
}
