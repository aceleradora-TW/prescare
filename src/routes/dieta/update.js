module.exports = Dieta => (req, res) => {
  Dieta.findOne({
    where: {
      id: req.params.dieta_id
    }
  }).then(dieta => {
    dieta.update({
      tipo: req.body.tipo,
      intervalo: req.body.intervalo

    }).then(() => {
      res.redirect(req.originalUrl)
    })
  })
}
