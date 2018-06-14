module.exports = Dieta => (req, res) => {
  return Dieta
  .findOne({
    where: {
      id: req.params.dieta_id
    }
  }).then(dieta => {
    dieta.update(req.body).then(() => {
      res.redirect('/acolhido/' + req.params.acolhido_id + '/prescricao/' + req.params.prescricao_id + '/edit')
    })
  })
}
