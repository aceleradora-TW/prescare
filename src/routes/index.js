const listChildren = require('../routes/listChildren')
const home = require('../routes/home')
const about = require('../routes/about')

const users = require('../mocks/userArray')
const user = require('../mocks/user')

const allRoutes = {
  listChildren: listChildren(users),
  home: home(),
  about: about(user)
}

module.exports = allRoutes
