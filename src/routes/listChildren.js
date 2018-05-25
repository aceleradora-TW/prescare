const listChildren = (Acolhido) => (req, res) => { 
    Acolhido
      .findAll()
      .then(acolhidos => {
        res.render('pages/listChildren', { acolhidos })
      })
      .catch(console.log)   
}

module.exports = listChildren
