module.exports = (Acolhido, Prescricao) => (req, res) => {
  return Acolhido.findOne({
    where: {
      id: req.params.acolhido_id
    },
    include: [Prescricao]
  }).then(acolhido => {
    console.log(acolhido.prescricaos);
    res.render('pages/infoAcolhido', { acolhido: acolhido, prescricao : acolhido.prescricaos })
  }).catch(err => console.log(err))  
}