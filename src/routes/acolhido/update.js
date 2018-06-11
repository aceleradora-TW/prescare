module.exports = Acolhido => (req, res) => {
  return Acolhido
    .findOne({
      where: {
        id: req.params.acolhido_id
      }
    }).then(acolhido => {
      if (!acolhido) res.redirect('/404')

      acolhido.update(req.body).then(() => {
        res.redirect('/acolhido/' + req.params.acolhido_id )
      })
    })
}

