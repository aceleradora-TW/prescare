const acolhidoRoutes = require('./acolhido')
const applicationRoutes = require('./application')
const prescricaoRoutes = require('./prescricao')

const createCuidado = require('./cuidado/create')
const editCuidado = require('./cuidado/edit')
const getCuidado = require('./cuidado/get')
const updateCuidado = require('./cuidado/update')

const allRoutes = models => ({
  acolhidoRoutes: acolhidoRoutes(models.Acolhido),
  applicationRoutes: applicationRoutes(),
  prescricaoRoutes: prescricaoRoutes(models.Prescricao),

  createCuidado: createCuidado(models.Cuidado),
  editCuidado: editCuidado(models.Cuidado),
  getCuidado: getCuidado(models.Cuidado),
  updateCuidado: updateCuidado(models.Cuidado)
})


module.exports = allRoutes