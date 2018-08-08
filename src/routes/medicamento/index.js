const create = require('./create')
const edit = require('./edit')
const destroy = require('./destroy')
const get = require('./get')
const update = require('./update')
const save = require('./save')

module.exports = (Medicamento, Prescricao, Acolhido, router) => {
  router.post('/acolhido/:acolhido_id/prescricao/:prescricao_id/medicamento/', save(Medicamento))
  router.get('/acolhido/:acolhido_id/prescricao/:prescricao_id/medicamento/create', create(Prescricao))
  router.get('/acolhido/:acolhido_id/prescricao/:prescricao_id/medicamento/:medicamento_id/', get(Medicamento))
  router.get('/acolhido/:acolhido_id/prescricao/:prescricao_id/edit/medicamento/:medicamento_id/edit', edit(Medicamento, Prescricao, Acolhido))
  router.post('/acolhido/:acolhido_id/prescricao/:prescricao_id/edit/medicamento/:medicamento_id/edit', update(Medicamento, Prescricao))
  router.post('/acolhido/:acolhido_id/prescricao/:prescricao_id/edit/medicamento/:medicamento_id/excluir', destroy(Medicamento, Prescricao))

  return router
}
