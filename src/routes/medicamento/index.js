const get = require('./get')

module.exports = Medicamento => ({
    get: get(Medicamento),
  })
