module.exports = Acolhido => (req, res) => {
  return Acolhido.find({
    where: {
      id: req.params.acolhido_id
    }
  }).then(acolhido => {
    if (!acolhido) res.send('Essa página não existe')
    res.render('pages/editarAcolhido', { 
      acolhido, 
      updateUrl: req.originalUrl })
  })
}