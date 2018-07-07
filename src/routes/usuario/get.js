module.exports = Usuario => (req, res) => {
  return Usuario.findOne({
    where: {
      id: req.params.usuario_id
    }
  }).then(usuario => {
    if (!usuario) {
      return res.render('pages/error')
    }

    res.render('pages/infoUsuario', {
      usuario,
      updateUrl: req.urlOriginal
    })

  }).catch(err => console.log(err))
}