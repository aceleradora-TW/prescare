const userArray = require('../mocks/userArray.js')


const listChildren = () => (req, res) => res.render('pages/listChildren', { users: userArray } )

module.exports = listChildren
