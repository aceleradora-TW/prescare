const router = require('express').Router()

const acolhidoRoutes = require('./acolhido')
const applicationRoutes = require('./application')
const cuidadoRoutes = require('./cuidado')
const medicamentoRoutes = require('./medicamento')
const dietaRoutes = require('./dieta')
const prescricaoRoutes = require('./prescricao')
const loginRoutes = require('./login')

module.exports = (models, passport)=> {
  applicationRoutes(router),
<<<<<<< 7cccb17e6ae372cb452dda6dc9d02a07405a9105
  acolhidoRoutes(models.Acolhido, models.Prescricao, router),
  prescricaoRoutes(models.Prescricao, models.Cuidado, models.Dieta, models.Medicamento, models.Acolhido, router),
  dietaRoutes(models.Dieta, models.Prescricao, models.Acolhido, router),
  cuidadoRoutes(models.Cuidado, models.Prescricao, models.Acolhido, router),
  medicamentoRoutes(models.Medicamento, models.Prescricao, models.Acolhido, router)
  loginRoutes(passport, router)
  
=======
  acolhidoRoutes(models.Acolhido, router),
  prescricaoRoutes(models.Prescricao, models.Dieta, models.Acolhido, router),
  dietaRoutes(models.Dieta, router),
  cuidadoRoutes(models.Cuidado, router),
  medicamentoRoutes(models.Medicamento, router),
  loginRoutes(passport, router)
>>>>>>> :bug: <@lindicell,@natymoraes> login com bug
  return router;
}