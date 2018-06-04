module.exports = Acolhido => (req, res) => {
    Acolhido.create({
      acolhido_id: req.params.acolhido_id
    }).then(acolhido => {
      res.redirect(req.originalUrl + '/' + acolhido.id + '/edit')
    })
  }
  