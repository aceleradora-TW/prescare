const create = require('./create')
const destroy = require('./destroy')
const edit = require('./edit')
const get = require('./get')
const update = require('./update')
const save = require('./save')
const updatePrescricao = require('./../../middlewares/updatePrescricao')

module.exports = (Dieta, Prescricao, Acolhido, router) => {
  router.post('/acolhido/:acolhido_id/prescricao/:prescricao_id/dieta/', save(Dieta), updatePrescricao(Prescricao))
  router.get('/acolhido/:acolhido_id/prescricao/:prescricao_id/dieta/create', create(Prescricao, Acolhido))
  router.get('/acolhido/:acolhido_id/prescricao/:prescricao_id/dieta/:dieta_id', get(Dieta))
  router.get('/acolhido/:acolhido_id/prescricao/:prescricao_id/edit/dieta/:dieta_id/edit', edit(Dieta, Prescricao, Acolhido))
  router.post('/acolhido/:acolhido_id/prescricao/:prescricao_id/edit/dieta/:dieta_id/edit', update(Dieta), updatePrescricao(Prescricao))
  router.post('/acolhido/:acolhido_id/prescricao/:prescricao_id/edit/dieta/:dieta_id/excluir', destroy(Dieta), updatePrescricao(Prescricao))

  return router
}
