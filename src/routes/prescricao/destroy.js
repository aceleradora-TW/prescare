module.exports = Prescricao => (req, res) => {
  Prescricao.destroy({
    where: {
      id: req.params.prescricao_id
    }
  })
  .then(prescricao => {
    res.redirect('/acolhido/' + req.params.acolhido_id)
  })
}
