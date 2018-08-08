module.exports = Prescricao => (req, res) => {
  Prescricao
    .findOne({
      where: { id: req.params.prescricao_id }
    })
    .then(dieta => {
      res.render('pages/novaDieta', { dieta: {} })
    })
    .catch(() => res.redirect('/404'))
}