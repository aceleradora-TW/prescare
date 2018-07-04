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

      let tipoDoUsuario = req.user.tipo

      if (tipoDoUsuario === 'clinica') {
        res.render('pages/editarDieta', {
          acolhidoId: req.params.acolhido_id,
          prescricaoId: req.params.prescricao_id,
          dieta,
          updateUrl: req.originalUrl,
          acolhido: dieta.prescricao.acolhido
        })
      }
      if (tipoDoUsuario === 'neuro') {
        res.render('pages/editarDieta', {
          acolhidoId: req.params.acolhido_id,
          prescricaoId: req.params.prescricao_id,
          dieta,
          updateUrl: req.originalUrl,
          acolhido: dieta.prescricao.acolhido
        })
      }
      if (tipoDoUsuario == 'farmacia') {
        res.render('pages/error')
      }
    })
}