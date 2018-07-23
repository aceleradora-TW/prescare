const { formatarData } = require('./../../helpers/data-helper')

module.exports = (Acolhido, Prescricao) => (req, res) => {
  return Acolhido.findAll({
    order: [['nome', 'ASC'], [{ model: Prescricao }, 'validade', 'DESC']],
    include: [{
      model: Prescricao,
      required: false,
      attributes: ['validade', 'updated_at']
    }]
  }).then(acolhidos => {   
    res.render('pages/listaAcolhidos', { 
      acolhidos,
      formatarData, 
      prescricaos: acolhidos.prescricaos,
      tipoDoUsuario: req.user.tipo 
    })
  }) 
}
