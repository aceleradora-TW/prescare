const novaPrescricao = (Acolhido) => (req, res) => { 
    return Acolhido
      .findAll()
      .then(acolhidos => {
        res.render('pages/novaPrescricao', { acolhidos })
      })
      .catch(console.log)   
}

module.exports = listaAcolhidos
