const create = require('./create')
const edit = require('./edit')
const get = require('./get')
const update = require('./update')

module.exports = (Medicamento, router) => {
  router.post('/acolhido/:acolhidoId/prescricao/:prescricaoId/edit/medicamento', create(Medicamento))
  router.get('/acolhido/:acolhidoId/prescricao/:prescricaoId/medicamento/:medicamentoId', get(Medicamento))
  router.get('/acolhido/:acolhidoId/prescricao/:prescricaoId/edit/medicamento/:medicamentoId/edit', edit(Medicamento))
  router.post('/acolhido/:acolhidoId/prescricao/:prescricaoId/edit/medicamento/:medicamentoId/edit', update(Medicamento))

  return router;
}