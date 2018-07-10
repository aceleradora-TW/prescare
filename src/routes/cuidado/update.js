const sequelize = require('sequelize')

module.exports = (Cuidado, Prescricao) => (req, res) => {
  return Cuidado
    .findOne({
      where: {
        id: req.params.cuidado_id
      }
    }).then(cuidado => {
      if (!cuidado) {
        return res.render('pages/error')
      }
      cuidado.update(req.body)
        .then(() => {
          res.redirect('/acolhido/' + req.params.acolhido_id + '/prescricao/' + req.params.prescricao_id + '/edit')
        })
    }),
    Prescricao.update(
      { updated_at: sequelize.NOW },
      { where: {id: req.params.prescricao_id }}
    ).then(result => {
    })
    .catch((error) => {
      console.log(error.message);
    })
}
