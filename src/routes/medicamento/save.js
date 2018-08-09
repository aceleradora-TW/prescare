module.exports = (Medicamento, Prescricao) => (req, res) => {
  return Medicamento.create({
    prescricao_id: req.params.prescricao_id,
    nome: req.body.nome,
    dosagem: req.body.dosagem,
    formaFarmaceutica: req.body.formaFarmaceutica,
    via: req.body.via,
    posologia: req.body.posologia,
    observacoes: req.body.observacoes,
    validadeMed: req.body.validadeMed
  })
    .then(() => {
      res.redirect('/acolhido/' + req.params.acolhido_id + '/prescricao/' + req.params.prescricao_id + '/edit')
    })
    .catch(() => res.redirect('/404'))
}
