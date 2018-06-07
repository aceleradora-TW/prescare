module.exports = Medicamento => (req, res) => {
    return Medicamento
    .findOne({
      where: {
        id: req.params.medicamento_id
      }
    }).then(medicamento => {
      res.render('pages/editarMedicamento', { medicamento })
    }).catch(err => console.log(err))  
  }
  