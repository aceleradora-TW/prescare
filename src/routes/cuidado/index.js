
<<<<<<< 8db5b842256a5735adb3d7d5f4a005715d41f326
const create = require('./create')
const get = require('./get')
const edit = require('./edit')
const update = require('./update')
const destroy = require('./destroy')

module.exports = (Cuidado, router) => {
  router.post('/acolhido/:acolhido_id/prescricao/:prescricao_id/edit/cuidado', create(Cuidado))
  router.get('/acolhido/:acolhido_id/prescricao/:prescricao_id/edit/cuidado/:cuidado_id/', get(Cuidado))
  router.get('/acolhido/:acolhido_id/prescricao/:prescricao_id/edit/cuidado/:cuidado_id/edit', edit(Cuidado))
  router.post('/acolhido/:acolhido_id/prescricao/:prescricao_id/edit/cuidado/:cuidado_id/edit', update(Cuidado))
  router.post('/acolhido/:acolhido_id/prescricao/:prescricao_id/edit/cuidado/:cuidado_id/edit/excluir', destroy(Cuidado))
  return router;
}
=======
const get = require('./get')

module.exports = Cuidado => {
  router.get('/:cuidado_id', get(Cuidado))

  return router;
}
>>>>>>> :rocket: <@natymoraes , @diovanemendes> Cria botão salvar e voltar com link #23
