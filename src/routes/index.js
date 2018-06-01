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
const editPrescricao = require('./prescricao/edit')
const getPrescricao = require('./prescricao/get')
const destroyPrescricao = require('./prescricao/destroy')
const updatePrescricao = require('./prescricao/update')

const allRoutes = models => ({
  listaAcolhidos: listaAcolhidos(models.Acolhido),
  home: home(),
  about: about(user),
  acolhido: acolhido(models.Acolhido),
  prescricaoAtualizada: prescricaoAtualizada(tabelaFarmaceutica),
  farmaceutica: farmaceutica(dadosFarmacia),

  createPrescricao: createPrescricao(models.Prescricao),
  editPrescricao: editPrescricao(models.Prescricao),
  getPrescricao: getPrescricao(models.Prescricao),
  destroyPrescricao: destroyPrescricao(models.Prescricao),
  updatePrescricao: updatePrescricao(models.Prescricao)
})

module.exports = allRoutes
