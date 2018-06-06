// module.exports = Prescricao => (req, res) => {
//   Prescricao.find({
//   }).then(prescricao => {
//     if (!prescricao){
//     res.redirect(req.originalUrl + '/' + prescricao.id + '/edit')
//   }
//   else{
//     res.render('/:prescricao_id')
//   }
//   })
// }

module.exports = Prescricao => (req, res) => {
<<<<<<< 4e14796c2d5c14d09743571f1618d6768233f2cb
  return Prescricao
  .create({
    acolhido_id: req.params.acolhido_id
=======
  Prescricao.find({
>>>>>>> :bug: <@EngelFlores,@alineabich> Criar nova prescricao #25
  }).then(prescricao => {
    if (!prescricao){
    res.redirect(req.originalUrl + '/' + prescricao.id + '/edit')
  }
  else{
    res.render('/:prescricao_id')
  }
  })
}