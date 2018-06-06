module.exports = Acolhido => (req, res) => {
  return Acolhido
    .findOne({
      where: {
        id: req.params.acolhido_id
      }
    }).then(acolhido => {
      if (!acolhido) res.redirect('/404')

      acolhido.updateAttributes({
        idade: req.body.idade,
        peso: req.body.peso,
        alergias: req.body.alergia,
      }).then(() => {
        res.render('pages/info', { acolhido: acolhido })
      })
    })
}

