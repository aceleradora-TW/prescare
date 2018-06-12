module.exports = Prescricao => (req, res) => {
  Prescricao.findOne({
    where: {
      id: req.params.prescricaoId
    },
  }).then(prescricao => {
    prescricao.update({
      data: new Date().getTime(),
      validade: req.body.validade
    }).then(() => {
      res.redirect(req.originalUrl)
    })
  })
}