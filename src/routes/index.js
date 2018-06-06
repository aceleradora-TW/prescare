const prescricaoRoutes = require('./prescricao')
const acolhidoRoutes = require('./acolhido')
const applicationRoutes = require('./application')

<<<<<<< 55e8da3d358b9c51f2b2d8e9131c441eef0b3880
const createCuidado = require('./cuidado/create')
const editCuidado = require('./cuidado/edit')
const getCuidado = require('./cuidado/get')
const updateCuidado = require('./cuidado/update')

const prescricaoRoutes = require('./prescricao')
const acolhidoRoutes = require('./acolhido')
const applicationRoutes = require('./application')
const cuidadoRoutes = require('./cuidado')

const allRoutes = models => ({
  acolhidoRoutes: acolhidoRoutes(models.Acolhido),
  prescricaoRoutes: prescricaoRoutes(models.Prescricao),
  applicationRoutes: applicationRoutes(),
  cuidadoRoutes: cuidadoRoutes(models.Cuidado)
  applicationRoutes: applicationRoutes(),
  cuidadoRoutes: cuidadoRoutes(models.Cuidado)

})

module.exports = allRoutes
=======
const allRoutes = models => ({
  acolhidoRoutes: acolhidoRoutes(models.Acolhido),
  prescricaoRoutes: prescricaoRoutes(models.Prescricao),
  applicationRoutes: applicationRoutes()
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
