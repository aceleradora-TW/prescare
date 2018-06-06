const get = require('./get')

module.exports = Dieta => ({
    get: get(Dieta),
  })