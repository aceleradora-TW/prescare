module.exports = Cuidado => (req, res) => {
  return Cuidado
    .findOne({
      where: { id: req.params.cuidado_id }
    })
    .then(cuidado => {
      if (!cuidado) {
        return res.render('pages/error')
      }
      let tipoDoUsuario = req.user.tipo
      if (tipoDoUsuario === 'clinica') {
        res.render('pages/editarCuidado', { cuidado })
      }
      if (tipoDoUsuario === 'neuro') {
        res.render('pages/editarCuidado', { cuidado })
      }
      if (tipoDoUsuario === 'farmacia') {
        res.render('pages/error')
      }
    }).catch(err => console.log(err))
}
