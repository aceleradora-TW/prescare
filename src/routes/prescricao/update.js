module.exports = Prescricao => (req, res) => {
  Prescricao.findOne({
    where: {
      id: req.params.prescricao_id
    },
  }).then(prescricao => {
    if (!prescricao) res.send('Essa página não existe')
    prescricao.update({
      data: new Date().getTime(),
      validade: req.body.validade
    }).then(() => {
      res.redirect(req.originalUrl)
    })
  })
}
