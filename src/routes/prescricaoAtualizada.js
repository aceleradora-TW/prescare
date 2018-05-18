const listaPrescricoes = require('../../public/js/listaPrescricoes')

const prescr = () => (req, res) => res.render('pages/prescricaoAtualizada', {listaPrescricoes : listaPrescricoes})  

module.exports = prescr
