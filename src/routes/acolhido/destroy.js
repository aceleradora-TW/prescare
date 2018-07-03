module.exports = Acolhido => (req, res) => {
  Acolhido.destroy({
    where: {
      id: req.params.acolhido_id
    }
  }).then(() => {
    res.redirect('/lista-acolhidos')
  })
}