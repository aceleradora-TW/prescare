module.exports = Prescricao => (req, res) => {
  return Prescricao
  .create({
    acolhido_id: req.params.acolhido_id
  }).then(prescricao => {
    res.redirect(req.originalUrl + '/' + prescricao.id + '/edit')
  })
}