module.exports = Acolhido => (req, res) => {
  return Acolhido
    .findAll({
      order: ['nome']
    })
    .then(acolhidos => {
      if (req.user) {
        res.render('pages/listaAcolhidos', { acolhidos})
      } else {
        console.log('sdsadasd')
        res.redirect('/login')
      }
    })
    .catch(console.log) 
}