const router = require('express').Router()

const create = require('./create')
const edit = require('./edit')
const get = require('./get')
const destroy = require('./destroy')
const update = require('./update')

module.exports = Prescricao => {
  router.post('/', create(Prescricao))
  router.get('/:prescricao_id', get(Prescricao))
  router.get('/:prescricao_id/edit', edit(Prescricao))
  router.get('/:prescricao_id/edit', update(Prescricao))
  router.delete('/:prescricao_id/destroy', destroy(Prescricao))

  return router;
}
