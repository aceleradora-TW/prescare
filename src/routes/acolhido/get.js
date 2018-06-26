module.exports = (Acolhido, Prescricao, Usuario) => (req, res) => {
  return Acolhido.findOne({
    where: {
      id: req.params.acolhido_id
    },
    include: [{ model: Prescricao, required: false, where: { acolhido_id: req.params.acolhido_id } },
    { model: Usuario }]

  }).then(acolhido => {
    if (usuario.tipo == 'medica') {
      res.render('pages/infoAcolhido', {
        prescricaoId: req.params.prescricao_id,
        acolhido,
        prescricaos: acolhido.prescricaos,
        updateUrl: req.urlOriginal
      })
    }
  }).catch(err => console.log(err))

}