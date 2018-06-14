module.exports = Acolhido => (req, res) => {
  console.log(req.params);
  
  return Acolhido.findOne({
    where: {
      id: req.params.acolhido_id
    }
  }).then(acolhido => {
    res.render('pages/infoAcolhido', { acolhido })
  }).catch(err => console.log(err))  
}