const userArray = require('../js/userArray.js')


const listChildren = () => (req, res) => res.render('pages/listChildren', { users: userArray } )

module.exports = listChildren
