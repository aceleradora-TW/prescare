const listChildren = require('../routes/listChildren')
const home = require('../routes/home')
const about = require('../routes/about')
const acolhido = require('../routes/acolhido')
const farmaceutica = require('../routes/farmaceutica')
const prescricaoAtualizada = require('../routes/prescricaoAtualizada')
const login = require('../routes/login')

const users = require('../mocks/userArray')
const user = require('../mocks/user')
const acolhidos = require('../mocks/acolhido')
const tabelaFarmaceutica = require('../mocks/tabelaFarmaceutica')
const dadosFarmacia = require('../mocks/farmacia')

const allRoutes = {
  listChildren: listChildren(users),
  home: home(),
  about: about(user),
  acolhido: acolhido(acolhidos),
  prescricaoAtualizada: prescricaoAtualizada(tabelaFarmaceutica),
  farmaceutica : farmaceutica(dadosFarmacia),
  login: login()
}

module.exports = allRoutes
