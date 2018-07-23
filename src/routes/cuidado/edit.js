module.exports = (Cuidado, Prescricao, Acolhido) => (req, res) => {
  return Cuidado
    .findOne({
      where: {
        id: req.params.cuidado_id
      },
      include: [
        {
          model: Prescricao, where: { id: req.params.prescricao_id },
          include: [{ model: Acolhido, where: { id: req.params.acolhido_id } }]
        }
      ]
    }).then(cuidado => {
      if (!cuidado) {
        return res.render('pages/error')
      }

      res.render('pages/editarCuidado', {
        acolhidoId: req.params.acolhido_id,
        prescricaoId: req.params.prescricao_id,
        cuidado,
        updateUrl: req.originalUrl,
        acolhido: cuidado.prescricao.acolhido
      })
    })
}
