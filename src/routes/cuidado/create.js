module.exports = (Prescricao, Acolhido) => (req, res, next) => {
  return Prescricao
    .findOne({
      where: { id: req.params.prescricao_id },
      include: [ { model: Acolhido, required: true } ]
    })
    .then(prescricao => {
      if(!prescricao) {
        return next()
      }

      res.render('pages/novoCuidado', { cuidado: {}, prescricao, acolhido: prescricao.acolhido })
    })
}
