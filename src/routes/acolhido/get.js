module.exports = Acolhido => (req, res) => {
    Acolhido.findOne({
      where: {
        id: req.params.id
      }
    }).then(acolhido => {
      if (!acolhido) res.redirect('404')
  
      res.render('pages/info', { acolhido: acolhido })
    }).catch(err => console.log(err))  
  }
  
