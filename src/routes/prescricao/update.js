const { parseData } = require('./../../helpers/data-helper')

module.exports = (Prescricao, Medicamento) => (req, res) => {
  return Prescricao.
    findOne({
      where: { id: req.params.prescricao_id },
      include: [Medicamento]
    })
    .then(prescricao => {
      prescricao.update({
        validade: parseData(req.body.validade)
      })
      res.redirect('/acolhido/' + req.params.acolhido_id + '/prescricao/' + req.params.prescricao_id + '/edit')
    })
    .catch(() => {
      res.redirect('/404')
    })
}
