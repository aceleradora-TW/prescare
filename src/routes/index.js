const listChildren = require('../routes/listChildren')
const home = require('../routes/home')
const about = require('../routes/about')
const acolhido = require('../routes/acolhido')

const users = require('../mocks/userArray')
const user = require('../mocks/user')
const acolhidos = require('../mocks/acolhido')

const allRoutes = {
  listChildren: listChildren(users),
  home: home(),
  about: about(user),
  acolhido: acolhido(acolhidos)
}

module.exports = allRoutes
