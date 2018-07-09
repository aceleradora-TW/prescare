module.exports = Usuario => (req, res) => {
  return Usuario.destroy({
    where: {
      id: req.params.usuario_id
    }
  }).then(() => {
    res.redirect('/listaUsuarios')
  })
}