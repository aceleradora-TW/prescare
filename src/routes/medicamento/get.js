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
      res.render('pages/editarMedicamento', { medicamento, tipoDoUsuario: req.user.tipo })
    }).catch(err => console.log(err))
}