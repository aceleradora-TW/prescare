// eslint-disable-next-line no-unused-vars
module.exports = Prescricao => (req, res) => {
  return Prescricao.findOne({
    where: { id: req.params.prescricao_id }
  }).then(prescricao => {
    prescricao.changed('updated_at', true)
    prescricao.save().then(() => {})
  })
}
