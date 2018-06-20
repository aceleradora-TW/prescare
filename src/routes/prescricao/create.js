module.exports = Prescricao => (req, res) => {
  return Prescricao
  .create({
    acolhido_id: req.params.acolhido_id
  }).then(prescricao => {
    if (req.user) {
      res.redirect(req.originalUrl + '/' + prescricao.id + '/edit')
    } else {
      res.redirect('/login')
    }
  })
}