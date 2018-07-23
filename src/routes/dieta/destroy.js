const sequelize = require('sequelize')

module.exports = (Dieta, Prescricao) => (req, res) => {
  return Dieta
    .destroy({
      where: {
        id: req.params.dieta_id
      }
    }).then(() => {
      res.redirect('/acolhido/' + req.params.acolhido_id + '/prescricao/' + req.params.prescricao_id + '/edit')
    }),
  Prescricao.update(
    { updated_at: sequelize.NOW },
    { where: {id: req.params.prescricao_id }}
  ).then(() => {})
}
