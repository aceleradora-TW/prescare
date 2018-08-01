const sequelize = require('sequelize')

module.exports = (Cuidado, Prescricao) => (req, res) => {
  return Cuidado
    .destroy({
      where: {
        id: req.params.cuidado_id
      }
    }).then(() => {
      res.redirect('/acolhido/' + req.params.acolhido_id + '/prescricao/' + req.params.prescricao_id + '/edit')
    }),
  Prescricao.update(
    { updated_at: sequelize.NOW },
    { where: {id: req.params.prescricao_id }}
  ).then(() => {})
}