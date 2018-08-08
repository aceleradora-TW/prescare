const create = require('./create')
const destroy = require('./destroy')
const edit = require('./edit')
const get = require('./get')
const update = require('./update')
const save = require('./save')

module.exports = (Cuidado, Prescricao, Acolhido, router)=> {
  router.post('/acolhido/:acolhido_id/prescricao/:prescricao_id/cuidado/', save(Cuidado))
  router.get('/acolhido/:acolhido_id/prescricao/:prescricao_id/cuidado/create', create(Cuidado))
  router.get('/acolhido/:acolhido_id/prescricao/:prescricao_id/edit/cuidado/:cuidado_id/', get(Cuidado))
  router.get('/acolhido/:acolhido_id/prescricao/:prescricao_id/edit/cuidado/:cuidado_id/edit', edit(Cuidado, Prescricao, Acolhido))
  router.post('/acolhido/:acolhido_id/prescricao/:prescricao_id/edit/cuidado/:cuidado_id/edit', update(Cuidado, Prescricao))
  router.post('/acolhido/:acolhido_id/prescricao/:prescricao_id/edit/cuidado/:cuidado_id/excluir', destroy(Cuidado, Prescricao))
  return router
}