module.exports = Acolhido => (req, res) => {
  return Acolhido
    .create({
      nome: req.body.nome || '-',
      nascimento: req.body.nascimento || '-',
      peso: req.body.peso || 0,
      alergias: req.body.alergias || '-',
      via_alimentacao: req.body.via_alimentacao || '-',
    })
    .then(acolhido => {
      res.redirect('/acolhido/' + acolhido.id)
    })
}