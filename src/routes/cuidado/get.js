module.exports = Cuidado => (req, res) => {
  return Cuidado
    .findOne({
      where: { id: req.params.cuidadoId }
    })
    .then(cuidado => {
      res.render('pages/editarCuidado', { cuidado })
    })
    .catch(err => console.log(err))
}