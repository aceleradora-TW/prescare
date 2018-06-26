module.exports = Dieta => (req, res) => {
  return Dieta
    .findOne({
      where: {
        id: req.params.dieta_id
      }
    }).then(dieta => {
      if(!dieta) return res.send('Essa página não existe')
      res.render('pages/editarDieta', { dieta })
    }).catch(err => console.log(err))
}
