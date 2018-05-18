const user = require('../mocks/user.js')

const about = () => (req, res) => res.render('pages/about', { usuario: user })

module.exports = about
