const user = require('../js/user.js')

const about = () => (req, res) => res.render('pages/about', { usuario: user })

module.exports = about
