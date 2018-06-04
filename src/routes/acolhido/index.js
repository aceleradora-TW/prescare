const edit = require('./edit')
const get = require('./get')
const create = require('./create')

module.exports = Acolhido => ({
  edit: edit(Acolhido),
  get: get(Acolhido),
  create: create(Acolhido)
})
