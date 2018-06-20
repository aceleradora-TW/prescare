module.exports = Acolhido => (req, res) => {
  return Acolhido.find({
     where: {
       id: req.params.acolhido_id
     }
   }).then(acolhido => {
    if (req.user) {
      res.render('pages/editarAcolhido', { acolhido, updateUrl: req.originalUrl })
    } else {
      res.redirect('/login')
    }
   })
 }
