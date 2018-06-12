module.exports = Acolhido => (req, res) => {
  return Acolhido.findOne({
    where: {
      id: req.params.acolhidoId
    }
  }).then(acolhido => {
    res.render('pages/infoAcolhido', { acolhido: acolhido})
  }).catch(err => console.log(err))  
}