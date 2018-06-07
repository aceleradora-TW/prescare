<<<<<<< b20a422915ceb093b02a7af0f7e7b4992613704c
module.exports = Acolhido => (req, res) => {
  return Acolhido.findOne({
    where: {
      id: req.params.acolhido_id
    }
  }).then(acolhido => {
    if (!acolhido) {
      return res.redirect('/404')
    } 

    res.render('pages/infoAcolhido', { acolhido: acolhido})
  }).catch(err => console.log(err))  
=======
module.exports = (Acolhido, Prescricao) => (req, res) => {
  return Acolhido
    .findOne({
      where: { 
        id: req.params.acolhido_id
      },
      include: [Prescricao]
    }).then(acolhido => {
      res.render('pages/info', { acolhido, presc: acolhido.prescricaos})
    })
    .catch(console.log)
>>>>>>> :construction: <@murilobauerc, @luizfetrindade, @ilizakoski> implementa teste
}