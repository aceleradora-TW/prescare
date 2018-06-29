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

<<<<<<< 93bff96755f4e3e24264803b90055787357c2225
    if (usuario == 'farmaceutica') {
      res.render('pages/error')
=======
    if (tipoDoUsuario === 'farmaceutica') {
      res.render('pages/editarPrescricaoFarmaceutica')
>>>>>>> :art: <@EngelFlores,@lindicell> Refatora branch
    }
  }).catch(err => console.log(err))
}