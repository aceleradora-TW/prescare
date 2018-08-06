module.exports = Medicamento => (req, res) => {
  return Medicamento.create({
    acolhido_id: req.params.acolhido_id,
    prescricao_id: req.params.prescricao_id,
    usuario: req.user.tipo
  })
    .then(medicamento => {
      res.redirect(req.originalUrl + '/' + medicamento.id + '/edit')
    })
    .catch(() => res.redirect('/404'))
}
