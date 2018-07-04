module.exports = Acolhido => (req, res) => {
  return Acolhido.find({
    where: {
      id: req.params.acolhido_id
    }
  }).then(acolhido => {
    if (!acolhido) {
      return res.render('pages/error')
    }
    return res.render('pages/editarAcolhido', { acolhido, updateUrl: req.originalUrl })

    let tipoDoUsuario = req.user.tipo

    if (usuario.tipo == 'clinica' || usuario.tipo == 'neurologista') {
      return res.render('pages/editarAcolhido', { acolhido, updateUrl: req.originalUrl })
    }

    if (tipoDoUsuario === 'neuro') {
      return res.render('pages/editarAcolhido', { acolhido, updateUrl: req.originalUrl })
    }

    if (tipoDoUsuario == 'farmacia') {
      return res.render('pages/editarAcolhido')
    }

  })
}