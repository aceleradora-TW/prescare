
const create = require('./create')
const get = require('./get')
const edit = require('./edit')
const update = require('./update')
const destroy = require('./destroy')

module.exports = (Cuidado, router) => {
  router.post('/acolhido/:acolhidoId/prescricao/:prescricaoId/edit/cuidado', create(Cuidado))
  router.get('/acolhido/:acolhidoId/prescricao/:prescricaoId/edit/cuidado/:cuidadoId/', get(Cuidado))
  router.get('/acolhido/:acolhidoId/prescricao/:prescricaoId/edit/cuidado/:cuidadoId/edit', edit(Cuidado))
  router.post('/acolhido/:acolhidoId/prescricao/:prescricaoId/edit/cuidado/:cuidadoId/edit', update(Cuidado))
  router.post('/acolhido/:acolhidoId/prescricao/:prescricaoId/edit/cuidado/:cuidadoId/edit/excluir', destroy(Cuidado))
  return router;
}