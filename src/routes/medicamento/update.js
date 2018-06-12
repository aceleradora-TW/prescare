module.exports = Medicamento => (req, res) => {
  return Medicamento
  .findOne({
    where: {
      id: req.params.medicamento_id
    }
  }).then(medicamento => {
    medicamento.update(req.body)
    .then(() => {
      res.redirect('/acolhido/' + req.params.acolhidoId + '/prescricao/' + req.params.prescricao_id + '/edit')
    })
  })
}