const Sequelize = require('sequelize')
module.exports = Prescricao => (req, res) => {
  return Prescricao.findOne({
    where: {
      id: req.params.id
    }
  }).then(prescricao => {
    if (req.user) {
      if (!prescricao) res.send('Essa página não existe.')
      res.render('pages/prescricao', { prescricao })
    } else {
      res.redirect('/login')
    }
  }).catch(err => console.log(err))  
}
