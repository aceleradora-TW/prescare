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
    let tipoDoUsuario = req.user.tipo
    if (tipoDoUsuario === 'medica') {
      res.render('pages/prescricao', { prescricao })
    }

    if (tipoDoUsuario === 'farmaceutica') {
      res.render('pages/editarPrescricaoFarmaceutica')
    }
  }).catch(err => console.log(err))
}