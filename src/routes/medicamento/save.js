module.exports = (Medicamento, Prescricao) => (req, res) => {
  return Medicamento.create({
    prescricao_id: req.params.prescricao_id,
  })
    .then(prescricao => {
      res.redirect('/acolhido/' + req.params.acolhido_id + '/prescricao/' + req.params.prescricao_id + '/edit')
    })
    .catch(() => res.redirect('/404'))
}
