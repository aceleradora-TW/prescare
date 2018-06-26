module.exports = Acolhido => (req, res) => {
  return Acolhido.find({
    where: {
      id: req.params.acolhido_id
    }
  }).then(acolhido => {

    if (!acolhido) {
      return res.render('pages/error')
    }

    let usuario = req.user.tipo

    if (usuario === 'medica') {
      res.render('pages/editarAcolhido', { acolhido, updateUrl: req.originalUrl })
    }
    
    if (usuario == 'farmaceutica') {
      res.render('pages/error')
    }
    
  })
}