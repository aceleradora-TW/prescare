module.exports = Medicamento => (req, res) => {
  Medicamento.findOne({
    where: {
      id: req.params.medicamento_id
    }
  }).then(medicamento => {
    if(!medicamento) res.render('/404')

    res.render('pages/editarMedicamento', { medicamento, updateUrl: req.originalUrl})
  })
}