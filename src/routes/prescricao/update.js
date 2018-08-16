module.exports = (Prescricao, Medicamento) => (req, res, next) => {
  return Prescricao.
    findOne({
      where: { id: req.params.prescricao_id },
      include: [Medicamento]
    })
    .then(prescricao => {
      if(!prescricao) {
        return next()
      }

      prescricao.update({
        validade: req.app.locals.converterData(req.body.validade)
      })

      res.redirect('/acolhido/' + req.params.acolhido_id + '/prescricao/' + req.params.prescricao_id + '/edit')
    })
}
