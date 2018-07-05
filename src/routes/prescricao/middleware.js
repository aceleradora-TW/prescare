module.exports = Prescricao => (req, res, next) => {
  Prescricao.findOne({
    where: { id: req.params.prescricao_id }
  }).then(prescricao => {
    prescricao.changed('updated_at', true)
    prescricao.save().then(_ => {
      next()
    }) 
  })
}
