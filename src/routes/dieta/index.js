const create = require('./create')
const edit = require('./edit')
const get = require('./get')
const update = require('./update')

module.exports = (Dieta, router) => {
  router.post('/acolhido/:acolhido_id/prescricao/:prescricao_id/edit/dieta', create(Dieta))
  router.get('/acolhido/:acolhido_id/prescricao/:prescricao_id/dieta/:dieta_id', get(Dieta))
  router.get('/acolhido/:acolhido_id/prescricao/:prescricao_id/edit/dieta/:dieta_id/edit', edit(Dieta))
  router.post('/acolhido/:acolhido_id/prescricao/:prescricao_id/edit/dieta/:dieta_id/edit', update(Dieta))
  return router;
}