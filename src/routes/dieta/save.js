module.exports = (Dieta, Prescricao) => (req, res) => {
    return Dieta.create({
      prescricao_id: req.params.prescricao_id,
      tipo: req.body.tipo,
      intervalo: req.body.intervalo,
      observacoes: req.body.observacoes
    })
      .then(() => {
        res.redirect('/acolhido/' + req.params.acolhido_id + '/prescricao/' + req.params.prescricao_id + '/edit')
      })
      .catch(() => res.redirect('/404'))
  }
  