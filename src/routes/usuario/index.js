const create = require('./create')
const destroy = require('./destroy')
const edit = require('./edit')
const get = require('./get')
const novo = require('./novoUsuario')
const list = require('./listaUsuarios')
const update = require('./update')

module.exports = (Usuario, router) => {
  router.get('/usuario/novo', novo(Usuario))
  router.get('/usuario/:usuario_id', get(Usuario))
  router.get('/listaUsuarios', list(Usuario))
  router.get('/usuario/:usuario_id/edit', edit(Usuario))
  router.post('/usuario/:usuario_id/edit', update(Usuario))
  router.post('/usuario/novo', create(Usuario))
  router.post('/usuario/:usuario_id/excluir', destroy(Usuario))

  return router
}