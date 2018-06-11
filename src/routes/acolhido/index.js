const get = require('./get')
const list = require('./list')

module.exports = (Acolhido, router) => {
  router.get('/acolhido/lista', list(Acolhido))
  router.get('/acolhido/:acolhido_id', get(Acolhido))
  return router;
}