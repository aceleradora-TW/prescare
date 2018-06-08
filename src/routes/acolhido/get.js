module.exports = (Acolhido, Prescricao) => (req, res) => {
  return Acolhido
    .findOne({
      where: { 
        id: req.params.acolhido_id
      },
      include: [Prescricao]
    }).then(acolhido => {
      res.render('pages/info', { acolhido, presc: acolhido.prescricaos})
    })
    .catch(console.log)
}