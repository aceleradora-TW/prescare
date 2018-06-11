module.exports = Medicamento => (req, res) => {
  return Medicamento
  .findOne({
    where: {
      id: req.params.medicamento_id
    }
  }).then(medicamento => {
    medicamento.update({
      nome: req.body.nome,
      via: req.body.via,
      formaFarmaceutica: req.body.formaFarmaceutica,
      intervalo: req.body.intervalo,
      dosagem: req.body.dosagem,
      validade: req.body.validade,
      lote: req.body.lote,
      tipo: req.body.tipo
    }).then(() => {
      res.redirect('/acolhido/' + req.params.acolhido_id + '/prescricao/' + req.params.prescricao_id + '/edit')
    })
  })
}