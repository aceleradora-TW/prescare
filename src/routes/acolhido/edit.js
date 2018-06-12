module.exports = Acolhido => (req, res) => {
  return Acolhido.find({
     where: {
       id: req.params.acolhidoId
     }
   }).then(acolhido => {
       res.render('pages/editarAcolhido', { acolhido, updateUrl: req.originalUrl })
   })
 }