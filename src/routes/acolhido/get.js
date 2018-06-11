module.exports = Acolhido => (req, res) => {
  return Acolhido.findOne({
    where: {
      id: req.params.acolhido_id
    }
  }).then(acolhido => {
    if (!acolhido) {
      return res.redirect('/404')
    } 

    res.render('pages/infoAcolhido', { acolhido: acolhido})
  }).catch(err => console.log(err))  
}