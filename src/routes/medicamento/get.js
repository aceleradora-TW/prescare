module.exports = Medicamento => (req, res) => {
    Medicamento.findOne({
      where: {
        id: req.params.id
      }
    }).then(medicamento => {
      res.render('pages/editarMedicamento', { medicamento })
    }).catch(err => console.log(err))
  }
