module.exports = (Dieta, Prescricao, Acolhido) => (req, res) => {
  return Dieta.findOne({
    where: {
      id: req.params.dieta_id
    },
    include: [Prescricao,Acolhido]
  }).then(dieta => {
    if (!dieta) res.send('Essa página não existe')
    res.render('pages/editarDieta', {
      acolhidoId: req.params.acolhido_id,
      prescricaoId: req.params.prescricao_id,
      dieta,
      updateUrl: req.originalUrl,
      acolhido: dieta.prescricao.acolhido
    })
}
