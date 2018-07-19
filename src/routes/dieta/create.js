const sequelize = require('sequelize')

module.exports = (Dieta, Prescricao) => (req, res) => {
  return Dieta
    .create({
      prescricao_id: req.params.prescricao_id
    }).then(dieta => {
      res.redirect(req.originalUrl + '/' + dieta.id + '/edit')
    }),
  Prescricao.update(
    { updated_at: sequelize.NOW },
    { where: {id: req.params.prescricao_id }}
  )
}
