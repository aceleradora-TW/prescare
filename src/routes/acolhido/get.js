module.exports = Acolhido => (req, res) => {
  return Acolhido
    .findOne({
      where: { id: req.params.acolhido_id }
    })
    .then(acolhido => {
      res.render('pages/info', { acolhido })
    })
    .catch(console.log)
}
