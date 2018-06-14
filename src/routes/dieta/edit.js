module.exports = Dieta => (req, res) => {
  console.log(req.params);

  return Dieta.findOne({
    where: {
      id: req.params.dieta_id
    }
  }).then(dieta => {
    res.render('pages/editarDieta', {
      acolhido_id: req.params.acolhido_id,
      prescricao_id: req.params.prescricao_id,
      dieta,
      updateUrl: req.originalUrl
    })
  })
}
