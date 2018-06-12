module.exports = Medicamento => (req, res) => {
<<<<<<< ea1ff0c6a57dcf189aade4e4f35f49ba59dc39b5
    Medicamento.findOne({
=======
  return Medicamento
    .findOne({
>>>>>>> :art:<@natymoraes, @marcos012> Atualiza com a master
      where: {
<<<<<<< f5b944511d255d18b6e4b0b4ac1b4b0e3bb98a4e
        id: req.params.id
=======
        id: req.params.medicamentoId
>>>>>>> :art:<@natymoraes, @marcos012> Refatora conforme PR
      }
    }).then(medicamento => {
      res.render('pages/editarMedicamento', { medicamento })
    }).catch(err => console.log(err))
}