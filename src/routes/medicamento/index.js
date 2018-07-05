const create = require('./create')
const edit = require('./edit')
const get = require('./get')
const destroy = require('./destroy')
const update = require('./update')

module.exports = (Medicamento, Prescricao, Acolhido, router) => {
  router.post('/acolhido/:acolhido_id/prescricao/:prescricao_id/edit/medicamento', create(Medicamento))
  router.get('/acolhido/:acolhido_id/prescricao/:prescricao_id/medicamento/:medicamento_id/', get(Medicamento))
  router.get('/acolhido/:acolhido_id/prescricao/:prescricao_id/edit/medicamento/:medicamento_id/edit', edit(Medicamento, Prescricao, Acolhido))
  router.post('/acolhido/:acolhido_id/prescricao/:prescricao_id/edit/medicamento/:medicamento_id/edit', update(Medicamento))
  router.post('/acolhido/:acolhido_id/prescricao/:prescricao_id/edit/medicamento/:medicamento_id/excluir', destroy(Medicamento))
  
  return router
}
