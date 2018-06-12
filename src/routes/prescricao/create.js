module.exports = Prescricao => (req, res) => {
  return Prescricao
  .create({
    acolhidoId: req.params.acolhidoId
  }).then(prescricao => {
    res.redirect(req.originalUrl + '/' + prescricao.id + '/edit')
  })
}