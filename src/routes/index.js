const home = require('../routes/home')
const about = require('../routes/about')
const prescr = require('../routes/complementoFarmaceutica')
const listChildren = require('../routes/listChildren')

const users = require('../mocks/userArray')
const user = require('../mocks/user')
const farmacia = require('../mocks/farmacia')

const allRoutes = {
  prescr: prescr(farmacia),
  listChildren: listChildren(users),
  home: home(),
  about: about(user)
}

module.exports = allRoutes
