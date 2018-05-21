const farmacia = require('../../src/mocks/farmacia')

const prescr = () => (req, res) => res.render('pages/farmaceutica', {farmacia : farmacia})  

module.exports = prescr