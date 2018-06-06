const listaAcolhidos = require('../routes/listaAcolhidos')
const home = require('../routes/home')
const about = require('../routes/about')
const acolhido = require('../routes/acolhido')
const farmaceutica = require('../routes/farmaceutica')
const prescricaoAtualizada = require('../routes/prescricaoAtualizada')

const user = require('../mocks/user')
const tabelaFarmaceutica = require('../mocks/tabelaFarmaceutica')
const dadosFarmacia = require('../mocks/farmacia')

const createPrescricao = require('./prescricao/create')
const destroyPrescricao = require('./prescricao/destroy')
const editPrescricao = require('./prescricao/edit')
const getPrescricao = require('./prescricao/get')
const updatePrescricao = require('./prescricao/update')

const editAcolhido = require('./acolhido/edit')
const getAcolhido = require('./acolhido/get')
const updateAcolhido = require('./acolhido/update')
const createAcolhido = require('./acolhido/create')
const allRoutes = models => ({
  listaAcolhidos: listaAcolhidos(models.Acolhido),
  home: home(),
  about: about(user),
  // acolhido: acolhido(models.Acolhido),
  prescricaoAtualizada: prescricaoAtualizada(tabelaFarmaceutica),
  farmaceutica: farmaceutica(dadosFarmacia),

  createPrescricao: createPrescricao(models.Prescricao),
  editPrescricao: editPrescricao(models.Prescricao),
  getPrescricao: getPrescricao(models.Prescricao),
  destroyPrescricao: destroyPrescricao(models.Prescricao),
  updatePrescricao: updatePrescricao(models.Prescricao),
  createAcolhido:createAcolhido(models.Acolhido),
  editAcolhido: editAcolhido(models.Acolhido),
  getAcolhido: getAcolhido(models.Acolhido),
  updateAcolhido: updateAcolhido(models.Acolhido)
})

module.exports = allRoutes
