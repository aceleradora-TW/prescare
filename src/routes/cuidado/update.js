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
      let tipoDoUsuario = req.user.tipo
      if (tipoDoUsuario === 'clinica') {
        cuidado.update(req.body)
          .then(() => {
            res.redirect('/acolhido/' + req.params.acolhido_id + '/prescricao/' + req.params.prescricao_id + '/edit')
          })
      }
      if (tipoDoUsuario === 'neuro') {
        cuidado.update(req.body)
          .then(() => {
            res.redirect('/acolhido/' + req.params.acolhido_id + '/prescricao/' + req.params.prescricao_id + '/edit')
          })
      }

      if (tipoDoUsuario === 'farmacia') {
        res.render('pages/error')
      }
    })
}
