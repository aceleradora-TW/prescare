const listChildren = require('../routes/listChildren')
const home = require('../routes/home')
const about = require('../routes/about')
const prescricaoAtual = require('../routes/prescricaoAtualizada')


const users = require('../mocks/userArray')
const user = require('../mocks/user')
const listaPrescricoes = require('../mocks/tabelaFarmaceutica')

const allRoutes = {   
  listChildren: listChildren(users),
  home: home(),
  about: about(user),
  prescricaoAtual: prescricaoAtual(listaPrescricoes)
}

module.exports = allRoutes
