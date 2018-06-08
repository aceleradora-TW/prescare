const router = require('express').Router()

const prescricaoRoutes = require('./prescricao')
const acolhidoRoutes = require('./acolhido')
const applicationRoutes = require('./application')
const cuidadoRoutes = require('./cuidado')
const dietaRoutes = require('./dieta')

module.exports = models => {
  applicationRoutes(router)
  acolhidoRoutes(models.Acolhido, router)
  prescricaoRoutes(models.Prescricao, models.Dieta, router)
  cuidadoRoutes(models.Cuidado, router)
  dietaRoutes(models.Dieta, router)
  
  return router;
}

