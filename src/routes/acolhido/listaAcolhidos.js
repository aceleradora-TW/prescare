module.exports = Acolhido => (req, res) => { 
    return Acolhido
      .findAll()
      .then(acolhidos => {
        res.render('pages/listaAcolhidos', { acolhidos })
      })
      .catch(console.log)   
}