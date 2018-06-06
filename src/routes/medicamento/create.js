module.exports = Medicamento => (req, res) => {
  Medicamento.create({
      prescricao_id: req.params.prescricao_id
  }).then(medicamento => {
      res.redirect(req.originalUrl + '/' + medicamento.id + '/edit')
  })
}