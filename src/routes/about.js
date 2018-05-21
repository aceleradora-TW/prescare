const user = require('../../src/mocks/user')

const about = () => (req, res) => res.render('pages/about', { usuario: user })

module.exports = about
