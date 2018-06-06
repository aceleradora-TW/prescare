module.exports = Acolhido => (req, res) => {
  return Acolhido.findOne({
    where: {
      id: req.params.acolhido_id
    }
  }).then(acolhido => {
    if (!acolhido) res.redirect('404')

    res.render('pages/info', { acolhido: acolhido})
  }).catch(err => console.log(err))  
}