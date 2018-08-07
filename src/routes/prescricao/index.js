const create = require ('./create')
const destroy = require('./destroy')
const edit = require('./edit')
const print = require('./print')
const save = require('./save')
const update = require('./update')

module.exports = (Prescricao, Cuidado, Dieta, Medicamento, Acolhido, router) => {
  router.get('/acolhido/:acolhido_id/prescricao/:prescricao_id/edit/print', print(Prescricao, Cuidado, Dieta, Medicamento, Acolhido))
  router.post('/acolhido/:acolhido_id/prescricao', save(Prescricao))
  router.get('/acolhido/:acolhido_id/prescricao/create', create(Acolhido))  
  router.get('/acolhido/:acolhido_id/prescricao/:prescricao_id/edit', edit(Prescricao, Cuidado, Dieta, Medicamento, Acolhido))
  router.post('/acolhido/:acolhido_id/prescricao/:prescricao_id/update', update(Prescricao, Medicamento))
  router.post('/acolhido/:acolhido_id/prescricao/:prescricao_id/destroy', destroy(Prescricao))
  
  return router
}
