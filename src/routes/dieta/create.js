module.exports = (Prescricao, Acolhido) => (req, res, next) => {
  return Prescricao.findOne({
    where: { id: req.params.prescricao_id },
    include: [{ model: Acolhido, required: true }]
  }).then(prescricao => {
    if (!prescricao) {
      return next()
    }

    res.render('pages/novaDieta', {
      dieta: {},
      prescricao: prescricao,
      acolhido: prescricao.acolhido
    })
  })
}
