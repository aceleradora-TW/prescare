module.exports = Usuario => (req, res) => {
  return Usuario
    .create({
      nome: req.body.nome || '-',
      senha: req.body.senha || '-',
      tipo: req.body.tipo,
    })
    .then(usuario => {
      res.redirect('/usuario/' + usuario.id)
    })
}