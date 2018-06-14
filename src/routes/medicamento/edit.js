module.exports = Medicamento => (req, res) => {
  Medicamento.findOne({
    where: {
      id: req.params.medicamento_id
    }
  }).then(medicamento => {
    res.render('pages/editarMedicamento', { 
      acolhido_id: req.params.acolhido_id,
      prescricao_id: req.params.prescricao_id,
      medicamento, 
      updateUrl: req.originalUrl 
    })
  })
}