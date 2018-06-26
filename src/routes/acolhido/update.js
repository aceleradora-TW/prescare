module.exports = Acolhido => (req, res) => {
  return Acolhido
    .findOne({
      where: {
        id: req.params.acolhido_id
      }
    }).then(acolhido => {
<<<<<<< 713504e98ea3c1ecc5dcbf7235f8928818c5cee8
      if (!acolhido) return res.redirect('/404')
=======
>>>>>>> :art:<@murilobauerc, @laurascclaro> reafatora rotas destroy
      acolhido.update(req.body).then(() => {
        res.redirect('/acolhido/' + req.params.acolhido_id)
      })
    })
}