module.exports = (Acolhido) => (req, res) => {  
  Acolhido
    .findOne({
      where: { id: req.params.acolhido_id }
    })
    .then(acolhido => {
      res.render('pages/novaPrescricao', { acolhido, tipoDoUsuario: req.user.tipo })
    })
    .catch(() => res.redirect('/404'))
}