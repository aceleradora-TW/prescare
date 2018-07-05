const moment = require('moment')

module.exports = (Acolhido, Prescricao) => (req, res) => {
  return Acolhido.findAll({
    order: [['nome', 'ASC'], [{ model: Prescricao }, 'validade', 'DESC']],
    include: [{
      model: Prescricao,
      required: false,
      attributes: ['validade', 'updated_at']
    }]
  }).then(acolhidos => {
    res.render('pages/listaAcolhidos', { acolhidos, prescricaos: acolhidos.prescricaos, tipoDoUsuario: req.user.tipo, moment:moment })
  }).catch(err => console.log(err))
}
