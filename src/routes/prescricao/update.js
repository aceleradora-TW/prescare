const moment = require('moment')

const FORMATO_DATA = 'DD/MM/YYYY'

module.exports = (Prescricao, Medicamento) => (req, res) => {
  return Prescricao.
    findOne({
      where: { id: req.params.prescricao_id },
      include: [Medicamento]
    })
    .then(prescricao => {
      prescricao.update({
        validade: moment(req.body.validade, FORMATO_DATA)
      })
      res.redirect('/acolhido/' + req.params.acolhido_id + '/prescricao/' + req.params.prescricao_id + '/edit')
    })
    .catch(() => {
      res.redirect('/404')
    })
    
}
