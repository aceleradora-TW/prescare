module.exports = Usuario => (req, res) => {
  return Usuario.findAll({
  }).then(usuarios => {
    res.render('pages/listaUsuarios', { usuarios })
  })
}
