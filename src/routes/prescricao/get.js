const Sequelize = require('sequelize')

module.exports = (Prescricao, Usuario) => (req, res) => {
  return Prescricao.findOne({
    where: {
      id: req.params.id
    }
  }).then(prescricao => {
    if (!prescricao) {
      return res.render('pages/error')
    }
    let usuario = req.user.tipo
    if (usuario === 'medica') {
      res.render('pages/prescricao', { prescricao })
    }

    if (usuario == 'farmaceutica') {
      res.render('pages/error')
    }
  }).catch(err => console.log(err))
}