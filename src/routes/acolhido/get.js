module.exports = Acolhido => (req, res) => {
  return Acolhido
    .findOne({
      where: { id: req.params.acolhido_id }
    })
    .then(acolhido => {
      if(!acolhido) res.send('Essa página não existe')
      res.render('pages/acolhido', { acolhido })
    })
    .catch(console.log)
}
