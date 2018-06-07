const get = require('./get')
const list = require('./list')

module.exports = (Acolhido, router) => {
  router.get('/acolhido/:acolhido_id', get(Acolhido))
  router.get('/acolhido/list', list(Acolhido))

  return router;
}
