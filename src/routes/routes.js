const listChildren = require('../routes/listChildren')
const home = require('../routes/home')
const about = require('../routes/about')
const users = require('../mocks/userArray')

const allRoutes = {
  listChildren: listChildren(users),
  home: home(),
  about: about()
}

module.exports = allRoutes
