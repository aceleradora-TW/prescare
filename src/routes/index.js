const router = require('express').Router()

const prescricaoRoutes = require('./prescricao')
const acolhidoRoutes = require('./acolhido')
const applicationRoutes = require('./application')
const cuidadoRoutes = require('./cuidado')

module.exports = models => {
  applicationRoutes(router)
  acolhidoRoutes(models.Acolhido, router)
  prescricaoRoutes(models.Prescricao, router)
  cuidadoRoutes(models.Cuidado, router)
  return router;
<<<<<<< b20a422915ceb093b02a7af0f7e7b4992613704c
}
=======
}
>>>>>>> :construction: <@murilobauerc, @luizfetrindade, @ilizakoski> implementa teste
