module.exports = Medicamento => (req, res) => {
  return Medicamento
    .findOne({
      where: {
        id: req.params.medicamento_id
      }
    }).then(medicamento => {
      if (!medicamento) {
        return res.render('pages/error')
      }
      let tipoDoUsuario = req.user.tipo
      if (tipoDoUsuario != 'farmaceutica') {
        res.render('pages/editarMedicamento', { medicamento })
      }

      if (tipoDoUsuario === 'farmaceutica') {
        res.render('pages/farmaceutica/editarMedicamentoFarmaceutica')
      }
    }).catch(err => console.log(err))
}