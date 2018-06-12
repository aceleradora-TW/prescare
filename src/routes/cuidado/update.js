module.exports = Cuidado => (req, res) => {
  return Cuidado
  .findOne({
    where: {
      id: req.params.cuidadoId
    }
  }).then(cuidado => {
    if(!cuidado) res.send('Essa página não existe')
      
    cuidado.update(req.body)
    .then(() => {
      res.redirect('/acolhido/' + req.params.acolhidoId + '/prescricao/' + req.params.prescricaoId + '/edit')
    })
  })
}