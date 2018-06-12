module.exports = (Prescricao, Cuidado, Dieta, Acolhido) => (req, res) => {
    return Prescricao.findOne({
    where: {
      id: req.params.prescricao_id
    },
    include:[Cuidado, Dieta, Acolhido]
      })
  .then(prescricao => {
    if(!prescricao) res.render('/404')
    
    res.render('pages/editarPrescricao', { 
      prescricao, 
      acolhido: prescricao.acolhido,
      cuidado : prescricao.cuidados,
      dietas: prescricao.dieta,
      updateUrl: req.originalUrl,
     })
  })
    .then(prescricao => {
      res.render('pages/editarPrescricao', {
        prescricao,
        updateUrl: req.originalUrl,
        cuidado: prescricao.cuidados,
        dietas: prescricao.dieta,
        acolhidoId: req.params.acolhido_id,
      })
    })
  }