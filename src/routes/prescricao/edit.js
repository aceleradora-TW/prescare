module.exports = (Prescricao, Dieta, Acolhido) => (req, res) => {
  console.log(req.params);
  
  return Prescricao.findOne({
    where: {
      id: req.params.prescricao_id
    },
    include:[Dieta, Acolhido]
      })
  .then(prescricao => {
    console.log(prescricao);
    
    res.render('pages/editarPrescricao', { 
      prescricao, 
      acolhido: prescricao.acolhido,
      dietas: prescricao.dieta,
      updateUrl: req.originalUrl,
     })
  })
}