module.exports = (Cuidado, Prescricao) => (req, res) => {
    return Cuidado.create({
      prescricao_id: req.params.prescricao_id,
      descricao: req.body.descricao,
      intervalo: req.body.intervalo,
      observacoes: req.body.observacoes
    })
      .then(() => {
        res.redirect('/acolhido/' + req.params.acolhido_id + '/prescricao/' + req.params.prescricao_id + '/edit')
      })
      .catch(() => res.redirect('/404'))
  }