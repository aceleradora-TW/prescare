module.exports = Dieta => (req, res) => {
  return Dieta
    .findOne({
      where: {
        id: req.params.dieta_id
      }
    }).then(dieta => {
      if (!dieta) {
        return res.render('pages/error')
      }
      let usuario = req.user.tipo
      if (usuario === 'medica') {
        res.render('pages/editarDieta', { dieta })
      }

      if (usuario == 'farmaceutica') {
        res.render('pages/error')
      }
    }).catch(err => console.log(err))
}