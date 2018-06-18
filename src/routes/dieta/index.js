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
<<<<<<< 4ceb3e6f2628cf69977b01f73989c0fd4c03f377
  router.post('/acolhido/:acolhido_id/prescricao/:prescricao_id/edit/dieta/:dieta_id/destroy', destroy(Dieta))
=======
  router.post('/acolhido/:acolhido_id/prescricao/:prescricao_id/edit/dieta/:dieta_id/edit/excluir', destroy(Dieta))
>>>>>>> :rocket: <@camirmarques, @ClaudiaStrm> adiciona funcionalidade de excluir itens da prescricao #25
  return router;
}