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

  })
}