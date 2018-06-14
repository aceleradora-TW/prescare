const router = require('express').Router()

const acolhidoRoutes = require('./acolhido')
const applicationRoutes = require('./application')
const cuidadoRoutes = require('./cuidado')
const medicamentoRoutes = require('./medicamento')
const dietaRoutes = require('./dieta')
const prescricaoRoutes = require('./prescricao')
const farmaceuticaRoutes = require('./farmaceutica')

module.exports = models => {
  applicationRoutes(router),
    acolhidoRoutes(models.Acolhido, models.Prescricao, router),
    prescricaoRoutes(models.Prescricao, models.Dieta, router),
    dietaRoutes(models.Dieta, router),
    cuidadoRoutes(models.Cuidado, router),
    medicamentoRoutes(models.Medicamento, router),
    farmaceuticaRoutes(models.Prescricao, models.Dieta, router)
  return router;
}
