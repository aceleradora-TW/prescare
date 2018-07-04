module.exports = Prescricao => (req, res) => {
  return Prescricao
  .create({
    acolhido_id: req.params.acolhido_id,
    usuario: req.user.tipo,
    validade: req.body.validade,
    data: new Date().getTime()
  }).then(prescricao => {
    res.redirect(req.originalUrl + '/' + prescricao.id + '/edit')
  })
  .catch(() => res.redirect('/404'))
}