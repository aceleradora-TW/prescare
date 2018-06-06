const prescricaoRoutes = require('./prescricao')
const acolhidoRoutes = require('./acolhido')
const applicationRoutes = require('./application')
const cuidadoRoutes = require('./cuidado')

const allRoutes = models => ({
  acolhidoRoutes: acolhidoRoutes(models.Acolhido),
  prescricaoRoutes: prescricaoRoutes(models.Prescricao),
  applicationRoutes: applicationRoutes(),
  cuidadoRoutes: cuidadoRoutes(models.Cuidado),
  applicationRoutes: applicationRoutes(),
  cuidadoRoutes: cuidadoRoutes(models.Cuidado)

})


module.exports = allRoutes