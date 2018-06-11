module.exports = (Acolhido, Prescricao) => (req, res) => {
  return Acolhido
    .findOne({
      where: {
        id: req.params.acolhido_id
      },
      include: [Prescricao]
    }).then(acolhido => {
<<<<<<< 8b9870ae64115aeed313a85a7e4c876ffe4de339
      res.render('pages/acolhido', { acolhido, prescricoes: acolhido.prescricaos})
=======
      res.render('pages/acolhido', { acolhido, presc: acolhido.prescricaos})
>>>>>>> :rocket: <@murilobauerc, @alineabich, @DiovaneMendes> implementa fluxo
    })
    .catch(console.log)
}
