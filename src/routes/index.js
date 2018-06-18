const router = require('express').Router()

const acolhidoRoutes = require('./acolhido')
const applicationRoutes = require('./application')
const cuidadoRoutes = require('./cuidado')
const medicamentoRoutes = require('./medicamento')
const dietaRoutes = require('./dieta')
const prescricaoRoutes = require('./prescricao')
const loginRoutes = require('./login')

module.exports = (models, passport) => {
  applicationRoutes(router),
  acolhidoRoutes(models.Acolhido, router),
  prescricaoRoutes(models.Prescricao, models.Dieta, models.Acolhido, router),
  dietaRoutes(models.Dieta, router),
  cuidadoRoutes(models.Cuidado, router),
  medicamentoRoutes(models.Medicamento, router)
  loginRoutes(passport, router)

  return router;
}
