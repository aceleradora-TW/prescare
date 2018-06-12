module.exports = Acolhido => (req, res) => {
  return Acolhido
    .findOne({
      where: {
        id: req.params.acolhido_id
      }
    }).then(acolhido => {
      if (!acolhido) {
        return res.send('Essa página não existe')
      }
      acolhido.update(req.body).then(() => {
        res.redirect('/acolhido/' + req.params.acolhido_id )
      })
    })
}

