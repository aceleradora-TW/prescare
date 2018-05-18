const listChildren = require('../routes/listChildren')
const home = require('../routes/home')
const about = require('../routes/about')
const prescricaoAtt = require('../routes/prescricaoAtualizada')


const users = require('../mocks/userArray')
const user = require('../mocks/user')
const listaPrescricoes = require('../mocks/tabelaFarmaceutica')

const allRoutes = {   
  listChildren: listChildren(users),
  home: home(),
  about: about(user),
  prescricaoAtt: prescricaoAtt(listaPrescricoes)
}

module.exports = allRoutes
