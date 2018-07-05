module.exports = Cuidado => (req, res, next) => {
  return Cuidado
    .findOne({
      where: {
        id: req.params.cuidado_id
      }
    }).then(cuidado => {
      if (!cuidado) {
        return res.render('pages/error')
      }
      cuidado.update(req.body)
        .then(() => {
          res.redirect('/acolhido/' + req.params.acolhido_id + '/prescricao/' + req.params.prescricao_id + '/edit')
          next()
        })
    })
}