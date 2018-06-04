const prescricaoRoutes = require('./prescricao')
const acolhidoRoutes = require('./acolhido')
const applicationRoutes = require('./application')

const allRoutes = models => ({
  acolhidoRoutes: acolhidoRoutes(models.Acolhido),
  prescricaoRoutes: prescricaoRoutes(models.Prescricao),
  applicationRoutes: applicationRoutes()
})

module.exports = allRoutes
