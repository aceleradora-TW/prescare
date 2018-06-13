const router = require('express').Router()

const prescricaoRoutes = require('./prescricao')
const acolhidoRoutes = require('./acolhido')
const applicationRoutes = require('./application')
const cuidadoRoutes = require('./cuidado')
const dietaRoutes = require('./dieta')

module.exports = models => {
  applicationRoutes(router)
  acolhidoRoutes(models.Acolhido, models.Prescricao, router)
  prescricaoRoutes(models.Prescricao, models.Dieta, models.Cuidado,  router)
  cuidadoRoutes(models.Cuidado, router)
  dietaRoutes(models.Dieta, router)
  return router;
}

