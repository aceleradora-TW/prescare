
const prescricaoRoutes = require('./prescricao')
const acolhidoRoutes = require('./acolhido')
const applicationRoutes = require('./application')
const cuidadoRoutes = require('./cuidado')

module.exports = models => {
  applicationRoutes(router)
  acolhidoRoutes(models.Acolhido, models.Prescricao, router)
  prescricaoRoutes(models.Prescricao, models.Cuidado, router)
  cuidadoRoutes(models.Cuidado, router)
  return router;
}
