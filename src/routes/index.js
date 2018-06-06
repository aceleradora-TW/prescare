const router = require('express').Router()

const prescricaoRoutes = require('./prescricao')
const acolhidoRoutes = require('./acolhido')
const applicationRoutes = require('./application')
const createCuidado = require('./cuidado/create')
const editCuidado = require('./cuidado/edit')
const getCuidado = require('./cuidado/get')
const updateCuidado = require('./cuidado/update')
const cuidadoRoutes = require('./cuidado')
const medicamentoRoutes = require('./medicamento')
const dietaRoutes = require('./dieta')

module.exports = models => {
  applicationRoutes(router),
    acolhidoRoutes(models.Acolhido, router),
    prescricaoRoutes(models.Prescricao, models.Dieta, router),
    dietaRoutes(models.Dieta, router),
    cuidadoRoutes(models.Cuidado, router),
    medicamentoRoutes(models.Medicamento, router)
  return router;
}