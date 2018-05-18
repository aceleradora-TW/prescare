const userArray = require('../js/userArray.js')


const tableChildren = () => (req, res) => res.render('pages/tableChildren', { users: userArray } )

module.exports = tableChildren
