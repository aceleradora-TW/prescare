module.exports = Cuidado => (req, res) => {
<<<<<<< d1560f0516fbd3c191936b3fbaf66bee77306862
    return Cuidado
    .findOne({
=======
    Cuidado.findOne({
>>>>>>> :rocket: <@Claudiastrm, @DiovaneMendes> Adiciona CRUD cuidados #23
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
