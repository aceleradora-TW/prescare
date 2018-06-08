const create = require('./create')
const edit = require('./edit')
const get = require('./get')
const destroy = require('./destroy')
const update = require('./update')

module.exports = (Prescricao, router) => {
  router.post('/acolhido/:acolhido_id/prescricao', create(Prescricao))
  router.get('/acolhido/:acolhido_id/prescricao/:prescricao_id', get(Prescricao))
  router.get('/acolhido/:acolhido_id/prescricao/:prescricao_id/edit', edit(Prescricao))
  router.post('/acolhido/:acolhido_id/prescricao/:prescricao_id/edit', update(Prescricao))
<<<<<<< 28c44a131d5f46c9046f463373cff507e213195c
  router.delete('/acolhido/:acolhido_id/prescricao/:prescricao_id/destroy', destroy(Prescricao))
<<<<<<< f4c75e4dc8c9e311e46ef9468433a98748b5991e
  
=======
=======
  router.post('/acolhido/:acolhido_id/prescricao/:prescricao_id', destroy(Prescricao))
>>>>>>> :rocket: <@murilobauerc, @ilizakoski> funciona botao voltar e botao excluir

>>>>>>> Criando um router exterior e chamando ele no app
  return router;
}