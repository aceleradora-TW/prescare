const listChildren = require('../routes/listChildren')
const home = require('../routes/home')
const about = require('../routes/about')

const allRoutes = {
  listChildren: listChildren(),
  home: home(),
  about: about()
}

module.exports = allRoutes
