module.exports = (Acolhido) => (req, res) => {  
  Acolhido
    .findOne({
      where: { id: req.params.acolhido_id }
    })
    .then(acolhido => {
      console.log(acolhido);
      res
      .render('pages/novaPrescricao', { acolhido })
    })
    .catch(() => res.redirect('/404'))
}