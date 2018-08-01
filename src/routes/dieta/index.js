const create = require('./create')
const destroy = require('./destroy')
const edit = require('./edit')
const get = require('./get')
const update = require('./update')

module.exports = (Dieta, Prescricao, Acolhido, router) => {
  router.post('/acolhido/:acolhido_id/prescricao/:prescricao_id/edit/dieta', create(Dieta, Prescricao))
  router.get('/acolhido/:acolhido_id/prescricao/:prescricao_id/dieta/:dieta_id', get(Dieta))
  router.get('/acolhido/:acolhido_id/prescricao/:prescricao_id/edit/dieta/:dieta_id/edit', edit(Dieta, Prescricao, Acolhido))
  router.post('/acolhido/:acolhido_id/prescricao/:prescricao_id/edit/dieta/:dieta_id/edit', update(Dieta, Prescricao))
  router.post('/acolhido/:acolhido_id/prescricao/:prescricao_id/edit/dieta/:dieta_id/excluir', destroy(Dieta, Prescricao))
  return router
}