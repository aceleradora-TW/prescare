const router = require('express').Router()

const prescricaoRoutes = require('./prescricao')
const acolhidoRoutes = require('./acolhido')
const applicationRoutes = require('./application')

module.exports = models => {
  applicationRoutes(router)
  acolhidoRoutes(models.Acolhido, router)
  prescricaoRoutes(models.Prescricao, router)

  return router;
}

