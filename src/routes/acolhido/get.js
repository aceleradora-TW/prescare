const query = (Acolhido, Prescricao, acolhidoId) => Acolhido.findOne({
  where: {
    id: acolhidoId
  },
  include: [
    {
      model: Prescricao,
      required: false,
      where: {
        acolhido_id: acolhidoId
      }
    }
  ]
})

const render = (req, res, notFound) => acolhido => acolhido
  ? res.render('pages/infoAcolhido', {
    acolhido,
    prescricaoId: req.params.prescricao_id,
    tipoDoUsuario: req.user.tipo,
    prescricaos: acolhido.prescricaos,
    updateUrl: req.urlOriginal
  })
  : notFound()

module.exports = (Acolhido, Prescricao) => (req, res, next) =>
  query(Acolhido, Prescricao, req.params.acolhido_id)
    .then(render(req, res, next))
    .catch(next)
