module.exports = (Acolhido, Prescricao) => (req, res, next) => Acolhido.findOne({
  where: {
    id: req.params.acolhido_id
  },
  include: [
    {
      model: Prescricao,
      required: false,
      where: {
        acolhido_id: req.params.acolhido_id
      }
    }
  ]
})
  .then(acolhido => {
    if (!acolhido) {
      return next()
    }

    res.render('pages/infoAcolhido', {
      acolhido,
      prescricaoId: req.params.prescricao_id,
      tipoDoUsuario: req.user.tipo,
      prescricaos: acolhido.prescricaos,
      updateUrl: req.urlOriginal
    })
  })
  .catch(next)
