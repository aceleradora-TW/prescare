module.exports = Acolhido => (req, res) => {
  return Acolhido
    .findAll({
      order: ['nome']
    })
    .then(acolhidos => {
      res.render('pages/listaAcolhidos', { acolhidos })
    })
    .catch(console.log) 
}