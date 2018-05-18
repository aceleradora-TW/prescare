const tableChildren = require('../routes/tableChildren')
const home = require('../routes/home')
const about = require('../routes/about')

const allRoutes = {
  tableChildren: tableChildren(),
  home: home(),
  about: about()
}

module.exports = allRoutes
