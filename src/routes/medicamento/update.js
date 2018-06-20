module.exports = Medicamento => (req, res) => {
  return Medicamento
  .findOne({
    where: {
      id: req.params.medicamento_id
    }
  }).then(medicamento => {
    if(!medicamento) {
      return res.send('Essa página não existe')
    }
    medicamento.update(req.body)
    .then(() => {
      res.redirect('/acolhido/' + req.params.acolhido_id + '/prescricao/' + req.params.prescricao_id + '/edit')
    })
  })
}
