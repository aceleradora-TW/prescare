const listChildren = (Acolhido) => (req, res) => { 
    return Acolhido
      .findAll()
      .then(acolhidos => {
        res.render('pages/listChildren', { acolhidos })
      })
      .catch(console.log)   
}

module.exports = listChildren
