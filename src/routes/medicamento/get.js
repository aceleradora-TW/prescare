module.exports = Medicamento => (req, res) => {
    Medicamento.findOne({
      where: {
        id: req.params.id
      }
    }).then(medicamento => {
      if (!medicamento) res.redirect('404')
  
      res.render('pages/medicamento', { medicamento })
    }).catch(err => console.log(err))  
  }
  