module.exports = Prescricao => (req, res) => {
  Prescricao
    .findOne({
      where: { id: req.params.prescricao_id }
    })
    .then(cuidado => {
      res.render('pages/novoCuidado', { cuidado: {} })
    })
    .catch(() => res.redirect('/404'))
}