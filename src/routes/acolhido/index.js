const router = require('express').Router()

const edit = require('./edit')
const get = require('./get')
const update = require('./update')

module.exports = Acolhido => {
  router.get('/:acolhido_id', get(Acolhido))
  router.get('/:acolhido_id/edit', edit(Acolhido))
  router.post('/:acolhido_id/edit', update(Acolhido))

  return router;
}

