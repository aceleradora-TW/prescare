module.exports = Medicamento => (req, res) => {
  Medicamento.findOne({
    where: {
      id: req.params.medicamentoId
    }
  }).then(medicamento => {
    res.render('pages/editarMedicamento', { 
      acolhidoId: req.params.acolhidoId,
      prescricaoId: req.params.prescricaoId,
      medicamento, 
      updateUrl: req.originalUrl 
    })
  })
}