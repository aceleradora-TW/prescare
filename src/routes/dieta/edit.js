module.exports = (Dieta, Prescricao, Acolhido) => (req, res) => {
  return Dieta
    .findOne({
      where: {
        id: req.params.dieta_id
      },
      include: [
        {
          model: Prescricao, where: { id: req.params.prescricao_id },
          include: [{ model: Acolhido, where: { id: req.params.acolhido_id } }]
        }
      ]
    }).then(dieta => {
      if (!dieta) {
        return res.render('pages/error')
      }
      res.render('pages/editarDieta', {
        acolhidoId: req.params.acolhido_id,
        prescricaoId: req.params.prescricao_id,
        dieta,
        updateUrl: req.originalUrl,
        acolhido: dieta.prescricao.acolhido
      })
    })
}
