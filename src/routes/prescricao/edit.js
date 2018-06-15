module.exports = (Prescricao, Cuidado, Dieta, Medicamento, Acolhido) => (req, res) => {
  return Prescricao.findOne({
    where: {
      id: req.params.prescricao_id
    },
    include: [Cuidado, Dieta, Medicamento, Acolhido]
  })
    .then(prescricao => {
      if (!prescricao) res.render('/404')

      res.render('pages/editarPrescricao', {
        prescricao,
        acolhido: prescricao.acolhido,
        dietas: prescricao.dieta,
        medicamentos: prescricao.medicamentos,
        acolhidoId: req.params.acolhido_id,
        updateUrl: req.originalUrl,
      })
    })
}
