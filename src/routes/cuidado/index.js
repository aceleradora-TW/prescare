const create = require('./create')
const edit = require('./edit')
const get = require('./get')
const update = require('./update')
const destroy = require('./destroy')

const prescricaoMiddleware = require('../prescricao/middleware')

module.exports = (Cuidado, Prescricao, Acolhido, router) => {
  router.post('/acolhido/:acolhido_id/prescricao/:prescricao_id/edit/cuidado', create(Cuidado), prescricaoMiddleware(Prescricao))
  router.get('/acolhido/:acolhido_id/prescricao/:prescricao_id/edit/cuidado/:cuidado_id/', get(Cuidado))
  router.get('/acolhido/:acolhido_id/prescricao/:prescricao_id/edit/cuidado/:cuidado_id/edit', edit(Cuidado, Prescricao, Acolhido))
  router.post('/acolhido/:acolhido_id/prescricao/:prescricao_id/edit/cuidado/:cuidado_id/edit', update(Cuidado), prescricaoMiddleware(Prescricao))
  router.post('/acolhido/:acolhido_id/prescricao/:prescricao_id/edit/cuidado/:cuidado_id/excluir', destroy(Cuidado), prescricaoMiddleware(Prescricao))
  return router
}
