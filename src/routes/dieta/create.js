module.exports = (Dieta) => (req, res) => {
  return Dieta
    .findOne({
      where: { id: req.params.dieta_id }
    })
    .then(dieta => {
      res.render('pages/novaDieta', { dieta: {} })
    })
    .catch(() => res.redirect('/404'))
}