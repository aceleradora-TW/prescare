module.exports = (Cuidado) => (req, res) => {
  return Cuidado
    .findOne({
      where: { id: req.params.cuidado_id }
    })
    .then(cuidado => {
      if(!cuidado) {
        return next()
      }
      res.render('pages/novoCuidado', { cuidado: {} })
    })
    .catch(() => res.render('/404'))
}