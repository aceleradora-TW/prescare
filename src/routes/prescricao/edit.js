module.exports = (Prescricao, Dieta, Cuidado) => (req, res) => {
  return Prescricao
  .findOne({
    where: {
      id: req.params.prescricao_id
    },
    include:[Dieta, Cuidado]
      })
  .then(prescricao => {
    console.log(prescricao)
    res.render('pages/editarPrescricao', {
      prescricao,
      dietas: prescricao.dieta,
      updateUrl: req.originalUrl,
      acolhidoId: req.params.acolhido_id,
      cuidados: prescricao.cuidados
     })
  })
}
