module.exports = Prescricao => (req, res) => {
  return Prescricao
  .create({
    acolhido_id: req.params.acolhido_id
  }).then(prescricao => {
    if (!prescricao){
    res.redirect(req.originalUrl + '/' + prescricao.id + '/edit')
  }
  else{
    res.render('/:prescricao_id')
  }
  })
}