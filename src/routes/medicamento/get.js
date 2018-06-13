module.exports = Medicamento => (req, res) => {
  return Medicamento
    .findOne({
      where: {
        id: req.params.medicamentoId
      }
    }).then(medicamento => {
      res.render('pages/editarMedicamento', { medicamento })
    }).catch(err => console.log(err))
}