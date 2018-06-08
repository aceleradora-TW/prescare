module.exports = Medicamento => (req, res) => {
  Medicamento.findOne({
    where: {
      id: req.params.medicamento_id
    }
  }).then(medicamento => {
    res.render('pages/editarMedicamento', { 
      acolhidoId: req.params.acolhido_id,
      prescricaoId: req.params.prescricao_id,
      medicamento, 
      updateUrl: req.originalUrl 
    })
  })
}
