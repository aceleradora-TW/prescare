module.exports = (Cuidado) => (req, res) => {
  return Cuidado
    .findOne({
      where: { id: req.params.cuidado_id }
    })
    .then(cuidado => {
      res.render('pages/novoCuidado', { cuidado: {} })
    })
    .catch(() => res.redirect('/404'))
}