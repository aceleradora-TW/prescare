module.exports = Acolhido => (req, res) => {
  return Acolhido
    .findAll()
    .then(acolhidos => {
      acolhidos.sort(function(a, b) {
        if (a.nome > b.nome) return 1
        if (b.nome > a.nome) return -1
        return 0
      })
      res.render('pages/listaAcolhidos', { acolhidos })
    })
    .catch(console.log) 
}