module.exports = Cuidado => (req, res) => {
  return Cuidado
    .findOne({
      where: {
        id: req.params.cuidado_id }
    })
    .then(cuidado => {
      if(!cuidado) res.send('Essa página não existe')
      res.render('pages/editarCuidado', { cuidado })
    }).catch(err => console.log(err))
}
