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
      let usuario = req.user.tipo
      if (usuario === 'medica') {
        res.render('pages/editarMedicamento', { medicamento })
      }

      if (usuario == 'farmaceutica') {
        res.render('pages/error')
      }
    }).catch(err => console.log(err))
}
