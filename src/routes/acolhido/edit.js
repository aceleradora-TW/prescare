module.exports = Acolhido => (req, res) => {
  return Acolhido.find({
    where: {
      id: req.params.acolhido_id
    }
  }).then(acolhido => {
    if(!acolhido) return res.redirect('/404')
    res.render('pages/editarAcolhido', { acolhido, updateUrl: req.originalUrl })
  })
}
