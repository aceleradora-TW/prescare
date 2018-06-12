module.exports = Cuidado => (req, res) => {
  return Cuidado
  .findOne({
    where: {
      id: req.params.cuidado_id
    }
  }).then(cuidado => {
    if(!cuidado) res.send('Essa página não existe')
      
    cuidado.update(req.body)
    .then(() => {
      res.redirect('/acolhido/' + req.params.acolhidoId + '/prescricao/' + req.params.prescricao_id + '/edit')
    })
  })
}