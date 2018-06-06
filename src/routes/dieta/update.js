module.exports = Dieta => (req, res) => {
    Dieta.findOne({
      where: {
        id: req.params.dieta_id
      }
    }).then(dieta => {
      if(!dieta) res.redirect('/404')
  
      dieta.update({
        tipo: req.body.tipo,
        intervalo: req.body.intervalo
        
      }).then(() => {
        res.redirect(req.originalUrl)
      })
    })
  }
  