module.exports = Cuidado => (req, res) => {
  return Cuidado
    .findOne({
      where: {
        id: req.params.cuidado_id
      }
    }).then(cuidado => {
      if (!cuidado) {
        return res.render('pages/error')
      }
      let usuario = req.user.tipo
      if (usuario === 'medica') {
        cuidado.update(req.body)
          .then(() => {
            res.redirect('/acolhido/' + req.params.acolhido_id + '/prescricao/' + req.params.prescricao_id + '/edit')
          })
      }
      if (usuario === 'farmaceutica') {
        res.render('pages/error')
      }
    })
}
