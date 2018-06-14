module.exports = (Prescricao, Dieta) => (req, res) => {
  Prescricao.findOne({
    where: {
      id: req.params.prescricao_id
    },
    include:[Dieta]
      })
  .then(prescricao => {
    res.render('pages/editarPrescricao', { 
      prescricao, 
      dietas: prescricao.dieta,
      updateUrl: req.originalUrl,
      acolhido_id: req.params.acolhido_id,
     })
  })
}