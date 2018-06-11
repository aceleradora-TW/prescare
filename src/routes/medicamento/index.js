const create = require('./create')
const get = require('./get')
const edit = require('./edit')
const update = require('./update')
const destroy = require('./destroy')

module.exports = (Medicamento, router) => {
  router.post('/acolhido/:acolhido_id/prescricao/:prescricao_id/edit/medicamento', create(Medicamento))
  router.get('/acolhido/:acolhido_id/prescricao/:prescricao_id/edit/medicamento/:medicamento_id/', get(Medicamento))
  router.get('/acolhido/:acolhido_id/prescricao/:prescricao_id/edit/medicamento/:medicamento_id/edit', edit(Medicamento))
  router.post('/acolhido/:acolhido_id/prescricao/:prescricao_id/edit/medicamento/:medicamento_id/edit', update(Medicamento))
  router.post('/acolhido/:acolhido_id/prescricao/:prescricao_id/edit/medicamento/:medicamento_id/edit/excluir', destroy(Medicamento))
  return router;
}