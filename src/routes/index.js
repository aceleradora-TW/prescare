const router = require('express').Router()

const prescricaoRoutes = require('./prescricao')
const acolhidoRoutes = require('./acolhido')
const applicationRoutes = require('./application')
<<<<<<< ee6f8c7f1e95b44d340545946b59714b7ccdf995
=======
<<<<<<< 8db5b842256a5735adb3d7d5f4a005715d41f326
<<<<<<< efa330f1a2826826df87d04f2b83c8ad7d9188ff
=======
const cuidadoRoutes = require('./cuidado')
>>>>>>> :rocket: <@natymoraes , @diovanemendes> Cria botão salvar e voltar com link #23

<<<<<<< 55e8da3d358b9c51f2b2d8e9131c441eef0b3880
>>>>>>> :rocket: <@natymoraes , @diovanemendes> Cria botão salvar e voltar com link #23
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
<<<<<<< ee6f8c7f1e95b44d340545946b59714b7ccdf995
}
=======
}
=======
const allRoutes = models => ({
  acolhidoRoutes: acolhidoRoutes(models.Acolhido),
  applicationRoutes: applicationRoutes(),
  cuidadoRoutes: cuidadoRoutes(models.Cuidado),
  prescricaoRoutes: prescricaoRoutes(models.Prescricao),
})

<<<<<<< efa330f1a2826826df87d04f2b83c8ad7d9188ff
<<<<<<< f5bb07296ffb79c008f7c7ec96f9d49dfc37a174
<<<<<<< 700cd2faa94f15ec8abdb5436c6832a1adb28d34
module.exports = allRoutes
<<<<<<< 72f21ded2a071b97b1511736435ebb24b8100284
>>>>>>> :rocket: <@natymoraes , @diovanemendes> Cria botão salvar e voltar com link #23
=======
module.exports = allRoutes
>>>>>>> :rocket: <@Claudiastrm, @DiovaneMendes> Adiciona CRUD cuidados #23
=======
module.exports = allRoutes
>>>>>>> :construction: <@Claudiastrm, @DiovaneMendes> Arruma conflito #23
=======
=======
const allRoutes = models => ({
  acolhidoRoutes: acolhidoRoutes(models.Acolhido),
  prescricaoRoutes: prescricaoRoutes(models.Prescricao),
  applicationRoutes: applicationRoutes(),
  cuidadoRoutes: cuidadoRoutes(models.Cuidado)
})

module.exports = allRoutes


// const listaAcolhidos = require('./acolhido/list')
// const home = require('./application/home')
// const about = require('./application/about')
// const acolhido = require('../routes/acolhido/get')
// const farmaceutica = require('../routes/farmaceutica')
// const prescricaoAtualizada = require('../routes/prescricaoAtualizada')

// const user = require('../mocks/user')
// const tabelaFarmaceutica = require('../mocks/tabelaFarmaceutica')
// const dadosFarmacia = require('../mocks/farmacia')

// const createPrescricao = require('./prescricao/create')
// const editPrescricao = require('./prescricao/edit')
// const getPrescricao = require('./prescricao/get')
// const destroyPrescricao = require('./prescricao/destroy')
// const updatePrescricao = require('./prescricao/update')

// const prescricaoRoutes = require('./prescricao')
// const acolhidoRoutes = require('./acolhido')
// const applicationRoutes = require('./application')

// const createCuidado = require('./cuidado/create')
// const editCuidado = require('./cuidado/edit')
// const getCuidado = require('./cuidado/get')
// const updateCuidado = require('./cuidado/update')

// const cuidadoRoutes = require('./cuidado')

// const allRoutes = models => ({
//   listaAcolhidos: listaAcolhidos(models.Acolhido),
//   home: home(),
//   about: about(user),
//   acolhido: acolhido(models.Acolhido),
//   prescricaoAtualizada: prescricaoAtualizada(tabelaFarmaceutica),
//   farmaceutica: farmaceutica(dadosFarmacia),

//   createPrescricao: createPrescricao(models.Prescricao),
//   editPrescricao: editPrescricao(models.Prescricao),
//   getPrescricao: getPrescricao(models.Prescricao),
//   destroyPrescricao: destroyPrescricao(models.Prescricao),
//   updatePrescricao: updatePrescricao(models.Prescricao),

//   createCuidado: createCuidado(models.Cuidado),
//   editCuidado: editCuidado(models.Cuidado),
//   getCuidado: getCuidado(models.Cuidado),
//   updateCuidado: updateCuidado(models.Cuidado),

//   acolhidoRoutes: acolhidoRoutes(models.Acolhido),
//   prescricaoRoutes: prescricaoRoutes(models.Prescricao),
//   applicationRoutes: applicationRoutes(),
//   cuidadoRoutes: cuidadoRoutes(models.Cuidado)
// })

// module.exports = allRoutes
>>>>>>> :bug: <@ClaudiaStrm, @DiovaneMendes> aruuma lista de acolhidos #23
>>>>>>> :bug: <@ClaudiaStrm, @DiovaneMendes> aruuma lista de acolhidos #23
=======

module.exports = allRoutes
>>>>>>> :construction: <@ClaudiaStrm> cria route index de cuidado
>>>>>>> :rocket: <@natymoraes , @diovanemendes> Cria botão salvar e voltar com link #23
