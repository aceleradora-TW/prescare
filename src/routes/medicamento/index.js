const create = require('./create')
const edit = require('./edit')
const get = require('./get')

module.exports = (Medicamento, router) => {
  router.post('/acolhido/:acolhido_id/prescricao/:prescricao_id/edit/medicamento', create(Medicamento))
  router.get('/acolhido/:acolhido_id/prescricao/:prescricao_id/medicamento/:medicamento_id', get(Medicamento))
  router.get('/acolhido/:acolhido_id/prescricao/:prescricao_id/edit/medicamento/:medicamento_id/edit', edit(Medicamento))
  router.post('/acolhido/:acolhido_id/prescricao/:prescricao_id/edit/medicamento/:medicamento_id/edit', update(Medicamento))

  return router;
<<<<<<< a0c6890910921d1baa79356c91c7c6099b6a7387
  }
=======
  
}
>>>>>>> :art:<@natymoraes, @marcos012> Atualiza com a master
