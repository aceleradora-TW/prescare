module.exports = (Prescricao, Cuidado, Dieta, Medicamento, Acolhido) => (req, res) => {
  return Prescricao.findOne({
    where: {
      id: req.params.prescricao_id
    },
    include: [Cuidado, Dieta, Medicamento, Acolhido]
  })
    .then(prescricao => {
      if (!prescricao) res.send('Essa página não existe.')

      res.render('pages/editarPrescricao', {
        prescricao,
        acolhidoId: req.params.acolhido_id,
        acolhido: prescricao.acolhido,
        dietas: prescricao.dieta,
        cuidados: prescricao.cuidados,
        updateUrl: req.originalUrl,
      })
    })
}
