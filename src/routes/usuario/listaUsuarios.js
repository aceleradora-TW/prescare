module.exports = Usuario => (req, res) => {
  return Usuario.findAll({
  }).then(usuarios => {
    res.render('pages/listaUsuarios', { usuarios })
  }).catch(err => console.log(err))
}
