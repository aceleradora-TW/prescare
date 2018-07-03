const create = require('./create')
const edit = require('./edit')
const get = require('./get')
const update = require('./update')
const destroy = require('./destroy')

module.exports = (Dieta, Prescricao, Acolhido, router) => {
  router.post('/acolhido/:acolhido_id/prescricao/:prescricao_id/edit/dieta', create(Dieta))
  router.get('/acolhido/:acolhido_id/prescricao/:prescricao_id/dieta/:dieta_id', get(Dieta))
  router.get('/acolhido/:acolhido_id/prescricao/:prescricao_id/edit/dieta/:dieta_id/edit', edit(Dieta, Prescricao, Acolhido))
  router.post('/acolhido/:acolhido_id/prescricao/:prescricao_id/edit/dieta/:dieta_id/edit', update(Dieta))
  router.post('/acolhido/:acolhido_id/prescricao/:prescricao_id/edit/dieta/:dieta_id/excluir', destroy(Dieta))
  return router
}