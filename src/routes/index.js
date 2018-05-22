const home = require('../routes/home')
const about = require('../routes/about')
const prescr = require('../routes/complementoFarmaceutica')

const users = require('../mocks/userArray')
const user = require('../mocks/user')

const allRoutes = {
  prescr: prescr(farmacia),
  listChildren: listChildren(users),
  home: home(),
  about: about(user)
}

module.exports = allRoutes
