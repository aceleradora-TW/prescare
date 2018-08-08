module.exports = Prescricao => (req, res) => {
  Prescricao
    .findOne({
      where: { id: req.params.prescricao_id }
    })
    .then(medicamento => {
      res.render('pages/novoMedicamento', { medicamento: {} })
    })
    .catch(() => res.redirect('/404'))
}
