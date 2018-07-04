const create = require('./create')
const edit = require('./edit')
const get = require('./get')
const destroy = require('./destroy')
const update = require('./update')

const prescricaoMiddleware = require('../prescricao/middleware')

module.exports = (Medicamento, Prescricao, Acolhido, router) => {
  router.get("/acolhido/:acolhido_id/prescricao/:prescricao_id/medicamento/:medicamento_id/", get(Medicamento))
  router.get("/acolhido/:acolhido_id/prescricao/:prescricao_id/edit/medicamento/:medicamento_id/edit", edit(Medicamento, Prescricao, Acolhido))
  router.post('/acolhido/:acolhido_id/prescricao/:prescricao_id/edit/medicamento', create(Medicamento), prescricaoMiddleware(Prescricao))
  router.post("/acolhido/:acolhido_id/prescricao/:prescricao_id/edit/medicamento/:medicamento_id/edit", update(Medicamento), prescricaoMiddleware(Prescricao))
  router.post("/acolhido/:acolhido_id/prescricao/:prescricao_id/edit/medicamento/:medicamento_id/excluir", destroy(Medicamento), prescricaoMiddleware(Prescricao))
  return router;
}
