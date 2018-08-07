module.exports = Prescricao => (req, res) => {
  return Prescricao.destroy({
    where: {
      id: req.params.prescricao_id
    }
  }).then(() => {
    res.redirect('/acolhido/' + req.params.acolhido_id)
  })
}
