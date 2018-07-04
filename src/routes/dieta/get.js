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
      let tipoDoUsuario = req.user.tipo
      
      if (tipoDoUsuario === 'clinica') {
        res.render('pages/editarDieta', { dieta })
      }
      if (tipoDoUsuario === 'neuro') {
        res.render('pages/editarDieta', { dieta })
      }

      if (tipoDoUsuario == 'farmaceutica') {
        res.render('pages/error')
      }
    }).catch(err => console.log(err))
}