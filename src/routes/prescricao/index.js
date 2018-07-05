const save = require('./save')
const edit = require('./edit')
const get = require('./get')
const destroy = require('./destroy')
const update = require('./update')
const create = require ('./create')
const print = require('./print')

module.exports = (Prescricao, Cuidado, Dieta, Medicamento, Acolhido, router) => {
  router.post('/acolhido/:acolhido_id/prescricao/:prescricao_id/print', print(Prescricao, Cuidado, Dieta, Medicamento, Acolhido))

  router.post('/acolhido/:acolhido_id/prescricao', save(Prescricao))
  router.get('/acolhido/:acolhido_id/prescricao/create', create(Acolhido))  
  router.get('/acolhido/:acolhido_id/prescricao/:prescricao_id', get(Prescricao))
  router.get('/acolhido/:acolhido_id/prescricao/:prescricao_id/edit', edit(Prescricao, Cuidado, Dieta, Medicamento, Acolhido))
  router.post('/acolhido/:acolhido_id/prescricao/:prescricao_id/edit', update(Prescricao))
  router.post('/acolhido/:acolhido_id/prescricao/:prescricao_id/destroy', destroy(Prescricao))
  return router;
}
