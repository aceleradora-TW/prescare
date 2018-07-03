module.exports = Acolhido => (req, res) => {
  return Acolhido
  .create()
  .then(acolhido => {
    res.render('pages/novoAcolhido', { acolhido, updateUrl: '/acolhido/' + acolhido.id + '/edit' })
  })
}