const moment = require('moment')

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
      res.render('pages/infoAcolhido', {
        prescricaoId: req.params.prescricao_id,
        acolhido,
        prescricaos: acolhido.prescricaos,
        updateUrl: req.urlOriginal,
        tipoDoUsuario: req.user.tipo,
        moment: moment
      })
  }).catch(err => console.log(err))
}