module.exports = Prescricao => (req, res) => {
  Prescricao.findOne({
    where: {
      id: req.params.prescricao_id
    }
  }).then(prescricao => {
    if(!prescricao) res.redirect('/404')

    prescricao.update({
      data: req.body.data,
      validade: req.body.validade
    }).then(() => {
      res.redirect(req.originalUrl)
    })
  })
}
