const home = require('../routes/home')
const about = require('../routes/about')
const prescr = require('../routes/prescricaoAtualizada')

const allRoutes = {
    home: home(),
    about: about(),
    prescr: prescr()
}

module.exports = allRoutes
