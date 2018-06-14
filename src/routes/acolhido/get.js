module.exports = (Acolhido, Prescricao) => (req, res) => {
  return Acolhido.findOne({
    where: {
      id: req.params.acolhido_id
    },
    include: [Prescricao]
  }).then(acolhido => {
    res.render('pages/infoAcolhido', { acolhido: acolhido, prescricaos: acolhido.prescricao })
  }).catch(err => console.log(err))  
}
