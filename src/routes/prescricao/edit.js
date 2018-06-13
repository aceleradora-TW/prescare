module.exports = (Prescricao, Dieta) => (req, res) => {
  Prescricao.findOne({
    where: {
      id: req.params.prescricao_id
    },
    include:[Dieta]
      })
  .then(prescricao => {
    console.log(prescricao)
    res.render('pages/editarPrescricao', { 
      prescricao, 
      dietas: prescricao.dieta,
      updateUrl: req.originalUrl,
      acolhidoId: req.params.acolhido_id,
     })
  })
}