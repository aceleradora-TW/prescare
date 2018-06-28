module.exports = Cuidado => (req, res) => {
  return Cuidado
    .findOne({
      where: { id: req.params.cuidado_id }
    })
    .then(cuidado => {
      if (!cuidado) {
        return res.render('pages/error')
      }
      let usuario = req.user.tipo
      if (usuario === 'medica') {
        res.render('pages/editarCuidado', { cuidado })
      }
      if (usuario === 'farmaceutica') {
        res.render('pages/error')
      }
    }).catch(err => console.log(err))
}
