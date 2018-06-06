module.exports = Cuidado => (req, res) => {
    return Cuidado
    .findOne({
      where: {
        id: req.params.cuidado_id
      }
    }).then(cuidado => {
      cuidado.update({
        descricao: req.body.descricao,
        intervalo: req.body.intervalo,
        observacoes: req.body.observacoes
      }).then(() => {
      res.redirect('/acolhido/' + req.params.acolhido_id + '/prescricao/' + req.params.prescricao_id + '/edit')
      })
    })
  }
