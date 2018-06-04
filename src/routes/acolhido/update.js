module.exports = Acolhido => (req, res) => {
    Acolhido.findOne({
      where: {
        id: req.params.acolhido_id
      }
    }).then(acolhido => {
      if(!acolhido) res.redirect('/404')
  
      acolhido.update({
        data: req.body.data,
        validade: req.body.validade
      }).then(() => {
        res.redirect(req.originalUrl)
      })
    })
  }
  