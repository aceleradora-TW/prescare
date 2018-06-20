module.exports = Prescricao => (req, res) => {
  Prescricao.destroy({
    where: {
      id: req.params.prescricao_id
    }
  }).then(() => { 
    if (req.user) {
      res.redirect('/acolhido/' + req.params.acolhido_id)
    } else {
      res.redirect('/login')
    }
  })
}
