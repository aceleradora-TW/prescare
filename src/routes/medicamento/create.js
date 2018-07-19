const sequelize = require('sequelize')

module.exports = (Medicamento, Prescricao) => (req, res) => {
  return Medicamento
    .create({
      prescricao_id: req.params.prescricao_id
    }).then(medicamento => {
      res.redirect(req.originalUrl + '/' + medicamento.id + '/edit')
    }),
  Prescricao.update(
    { updated_at: sequelize.NOW },
    { where: {id: req.params.prescricao_id }}
  ).then(() => {})
}
