module.exports = Dieta => (req, res) => {
  return Dieta.findOne({
    where: {
      id: req.params.dieta_id
    }
  }).then(dieta => {
    res.render('pages/editarDieta', {
      acolhidoId: req.params.acolhido_id,
      prescricaoId: req.params.prescricao_id,
      dieta,
      updateUrl: req.originalUrl
    })
  })
}