const get = require('./get')
const login = require('./login')
const logout = require('./logout')

module.exports = (passport, router) => {
  router.get('/login', get())
  router.post('/login', login(passport))
  router.get('/logout', logout())

  return router;
}