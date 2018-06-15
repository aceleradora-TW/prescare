module.exports = (Medicamento, Prescricao, Acolhido) => (req, res) => {
  Medicamento.findOne({
    where: {
      id: req.params.medicamento_id
    },
    include: [{
      model: Prescricao, where: {
        id: req.params.prescricao_id
      }, include: [{
        model: Acolhido, where: {
          id: req.params.acolhido_id
        }
      }]
    }]
  }).then(medicamento => {
    res.render('pages/editarMedicamento', {
      acolhido: medicamento.prescricao.acolhido,
      acolhidoId: req.params.acolhido_id,
      prescricaoId: req.params.prescricao_id,
      medicamento,
      updateUrl: req.originalUrl,
    })
  })
}