module.exports = (Acolhido) => (req, res, next) => {
  return Acolhido
    .findOne({
      where: { id: req.params.acolhido_id }
    })
    .then(acolhido => {
      if(!acolhido) {
        return next()
      }

      res.render('pages/novaPrescricao', { acolhido })
    })
}
