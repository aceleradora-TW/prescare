module.exports = Usuario => (req, res) => {
  return Usuario
    .findOne({
      where: {
        id: req.params.usuario_id
      }
    }).then(usuario => {
      usuario.update(req.body).then(() => {
        res.redirect('/usuario/' + req.params.usuario_id)
      })
    })
}