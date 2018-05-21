const home = require('../routes/home')
const about = require('../routes/about')
const prescr = require('../routes/complementoFarmaceutica')

const allRoutes = {
  home: home(),
  about: about(),
  prescr: prescr()
}

module.exports = allRoutes
