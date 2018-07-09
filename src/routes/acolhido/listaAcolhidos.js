module.exports = (Acolhido, Prescricao) => (req, res) => {
  const moment = require('moment')
  return Acolhido.findAll({
    order: [['nome', 'ASC'], [{ model: Prescricao }, 'validade', 'DESC']],
    include: [{
      model: Prescricao,
      required: false,
      attributes: ['validade', 'updated_at']
    }]
  }).then(acolhidos => {
    res.render('pages/listaAcolhidos', { acolhidos, prescricaos: acolhidos.prescricaos, moment: moment })
  }).catch(err => console.log(err))
}
