module.exports = Medicamento => (req, res) => {
<<<<<<< ea1ff0c6a57dcf189aade4e4f35f49ba59dc39b5
    Medicamento.findOne({
=======
  return Medicamento
    .findOne({
>>>>>>> :art:<@natymoraes, @marcos012> Atualiza com a master
      where: {
        id: req.params.id
      }
    }).then(medicamento => {
      res.render('pages/editarMedicamento', { medicamento })
    }).catch(err => console.log(err))
}