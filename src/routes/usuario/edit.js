module.exports = Usuario => (req, res) => {
  return Usuario.find({
    where: {
      id: req.params.usuario_id
    }
  }).then(usuario => {
    if (!usuario) {
      return res.render('pages/error')
    }
    return res.render('pages/editarUsuario', { usuario, updateUrl: req.originalUrl })
  })
}