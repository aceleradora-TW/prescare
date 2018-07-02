
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

    let tipoDoUsuario = req.user.tipo

    if (tipoDoUsuario === 'medica') {
      res.render('pages/infoAcolhido', {
        prescricaoId: req.params.prescricao_id,
        acolhido,
        prescricaos: acolhido.prescricaos,
        updateUrl: req.urlOriginal
      })
    }

    if (tipoDoUsuario === 'farmaceutica') {
      res.render('pages/farmaceutica/infoAcolhidoFarmaceutica', {
        prescricaoId: req.params.prescricao_id,
        acolhido,
        prescricaos: acolhido.prescricaos,
        updateUrl: req.urlOriginal
      })
    }

  }).catch(err => console.log(err))
}