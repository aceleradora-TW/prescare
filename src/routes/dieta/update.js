const sequelize = require('sequelize')

module.exports = (Dieta, Prescricao) => (req, res) => {
  return Dieta
    .findOne({
      where: {
        id: req.params.dieta_id
      }
    }).then(dieta => {
      if (!dieta) {
        return res.render('pages/error')
      }
      dieta.update(req.body)
        .then(() => {
          res.redirect('/acolhido/' + req.params.acolhido_id + '/prescricao/' + req.params.prescricao_id + '/edit')
        })
    }),
  Prescricao.update(
    { updated_at: sequelize.NOW },
    { where: {id: req.params.prescricao_id }}
  ).then(() => {})
}
