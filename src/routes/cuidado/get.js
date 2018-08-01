module.exports = Cuidado => (req, res) => {
  return Cuidado
    .findOne({
      where: { id: req.params.cuidado_id }
    })
    .then(cuidado => {
      if (!cuidado) {
        return res.render('pages/error')
      }
      res.render('pages/editarCuidado', { cuidado })
    })
}