module.exports = Acolhido => (req, res) => {
  return Acolhido.destroy({
    where: {
      id: req.params.acolhido_id
    }
  }).then(() => {
    res.redirect('/lista-acolhidos')
  })
}