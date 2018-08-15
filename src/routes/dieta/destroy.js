module.exports = Dieta => (req, res) => {
  return Dieta
    .destroy({
      where: {
        id: req.params.dieta_id
      }
    }).then(() => {
      res.redirect('/acolhido/' + req.params.acolhido_id + '/prescricao/' + req.params.prescricao_id + '/edit')
    })
}
