module.exports = Dieta => (req, res) => {
    Dieta.findOne({
      where: {
        id: req.params.dieta_id
      }
    }).then(dieta => {
      if(!dieta) res.render('/404')
  
      res.render('pages/editarDieta', { dieta, updateUrl: req.originalUrl})
    })
  }
  