module.exports = (Prescricao, Dieta) => (req, res) => {
  Prescricao.findOne({
    where: {
      id: req.params.prescricao_id
    },
    include:[Dieta]
      })
  .then(prescricao => {
<<<<<<< 5bb20c44a3657288dae6585d837bb34c4f9612a1
    console.log(prescricao)
    res.render('pages/editarPrescricao', { 
      prescricao, 
      dietas: prescricao.dieta,
      updateUrl: req.originalUrl,
      acolhidoId: req.params.acolhido_id,
     })
=======
    res.render('pages/editarPrescricao', { prescricao, updateUrl: req.originalUrl })
>>>>>>> :construction: <@marcos012, @ClaudiaStrm> adiciona rotas dos medicamentos
  })
}