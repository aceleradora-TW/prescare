
const router = require('express').Router()

const prescricaoRoutes = require('./prescricao')
const acolhidoRoutes = require('./acolhido')
const applicationRoutes = require('./application')
const cuidadoRoutes = require('./cuidado')
const medicamentoRoutes = require('./medicamento')
const dietaRoutes = require('./dieta')

module.exports = models => {
<<<<<<< b62d7b828ca06052b92e5c5ad056d746737b07d9
  applicationRoutes(router),
    acolhidoRoutes(models.Acolhido, router),
    prescricaoRoutes(models.Prescricao, models.Dieta, router),
    dietaRoutes(models.Dieta, router),
    cuidadoRoutes(models.Cuidado, router)
    medicamentoRoutes(models.Medicamento, router)
  }
=======
  applicationRoutes(router)
  acolhidoRoutes(models.Acolhido, router)
  prescricaoRoutes(models.Prescricao, router)
  cuidadoRoutes(models.Cuidado, router)
  medicamentoRoutes(models.Medicamento, router)
  cuidadoRoutes(models.Cuidado, router)
  return router;
}
>>>>>>> :rocket: <@natymoraes , @diovanemendes> Cria botão salvar e voltar com link #23
