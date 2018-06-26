module.exports = (Acolhido, Prescricao) => (req, res) => {
  return Acolhido.findOne({
    where: {
      id: req.params.acolhido_id
    },
    include: [{ model: Prescricao, required: false, where: { acolhido_id: req.params.acolhido_id } }]

  }).then(acolhido => {
    if (!acolhido) {
      return res.render('pages/error')
    }

    let usuario = req.user.tipo

    if (usuario === 'medica') {
      res.render('pages/infoAcolhido', {
        prescricaoId: req.params.prescricao_id,
        acolhido,
        prescricaos: acolhido.prescricaos,
        updateUrl: req.urlOriginal
      })
    }
    
    if (usuario == 'farmaceutica') {
      res.render('pages/error')
    }

  }).catch(err => console.log(err))
}
