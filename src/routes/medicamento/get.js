module.exports = Medicamento => (req, res) => {
    return Medicamento
      .findAll()
      .then(medicamento => {
        res.render('pages/medicamento', { medicamento })
      })
      .catch(console.log)
  }
  
