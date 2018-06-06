const edit = require('./edit')
const get = require('./get')
const create = require('./create')
const update = require('./update')

module.exports = Acolhido => ({
  create: create(Acolhido),
  edit: edit(Acolhido),
  get: get(Acolhido),
  update: update(Acolhido)
})
