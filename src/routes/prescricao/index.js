const create = require('./create')
const edit = require('./edit')
const get = require('./get')
const destroy = require('./destroy')

module.exports = Prescricao => ({
  create: create(Prescricao),
  edit: edit(Prescricao),
  get: get(Prescricao),
  destroy: destroy(Prescricao)
})
