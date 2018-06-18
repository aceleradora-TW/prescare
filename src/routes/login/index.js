const get = require('./get')
const login = require('./login')

module.exports = (passport, router) => {
  router.get('/login', get())
  router.post('/login', login(passport))
  
  return router;
}
