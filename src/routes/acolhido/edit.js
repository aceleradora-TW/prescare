module.exports = Acolhido => (req, res) => {
    Acolhido.find({
      where: {
        id: req.params.acolhido_id
      }
    }).then(acolhido => {
      if(!acolhido) res.render('/404')
  
      res.render('pages/editarAcolhido', { acolhido, updateUrl: req.originalUrl })
    })
  }
  