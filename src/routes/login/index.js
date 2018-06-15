// const create = require('./create')
// const edit = require('./edit')
const get = require('./get')
const login = require('./login')
// const update = require('./update')
// const destroy = require('./destroy')

module.exports = (router) => {
//   router.post('/acolhido/:acolhido_id/prescricao/:prescricao_id/edit/cuidado', create(Cuidado))
  router.get('/login', get())
  router.post('/login', login())
//   router.get('/acolhido/:acolhido_id/prescricao/:prescricao_id/edit/cuidado/:cuidado_id/edit', edit(Cuidado))
//   router.post('/acolhido/:acolhido_id/prescricao/:prescricao_id/edit/cuidado/:cuidado_id/edit', update(Cuidado))
//   router.post('/cuidado/:cuidado_id/excluir', destroy(Cuidado))
  return router;
}


// const about = require('./about')
// const home = require('./home')
// const error = require('./error')

// module.exports = router => {
//   router.get('/', home())
//   router.get('/about', about())
//   router.get('/404', error())

//   return router;
// }