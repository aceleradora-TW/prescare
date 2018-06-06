module.exports = Medicamento => (req, res) => {
  return Medicamento
  .findOne({
    where: {
      id: req.params.medicamento_id
    }
  }).then(medicamento => {
    if (!medicamento) res.redirect('404')

    res.render('pages/editarMedicamento', { medicamento })
  }).catch(err => console.log(err))  
}
