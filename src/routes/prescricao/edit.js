module.exports = (Prescricao, Cuidado, Dieta, Medicamento, Acolhido) => (req,res, next) => {
  return Prescricao.findOne({
    where: {
      id: req.params.prescricao_id
    },
    include: [Cuidado, Dieta, Medicamento, Acolhido]
  }).then(prescricao => {
    if (!prescricao) {
      return next()
    }
    
    res.render('pages/editarPrescricao', {
      prescricao,
      acolhido: prescricao.acolhido,
      updateUrl: req.originalUrl
    })
  })
}
