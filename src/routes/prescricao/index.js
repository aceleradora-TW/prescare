const create = require('./create')
const edit = require('./edit')
const get = require('./get')
const destroy = require('./destroy')
const update = require('./update')

module.exports = (Prescricao, Dieta, router) => {
  router.post('/acolhido/:acolhido_id/prescricao', create(Prescricao))
  router.get('/acolhido/:acolhido_id/prescricao/:prescricao_id', get(Prescricao))
  router.get('/acolhido/:acolhido_id/prescricao/:prescricao_id/edit', edit(Prescricao, Dieta))
  router.post('/acolhido/:acolhido_id/prescricao/:prescricao_id/edit', update(Prescricao))
  router.delete('/acolhido/:acolhido_id/prescricao/:prescricao_id/destroy', destroy(Prescricao))
  return router;
}