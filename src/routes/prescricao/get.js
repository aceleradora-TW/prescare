const Sequelize = require('sequelize')
console.log("ESDTOU AQUI --------------------------")
module.exports = Prescricao => (req, res) => {
  return Prescricao.findOne({
    where: {
      id: req.params_id
    }
  }).then(prescricao => {
    res.render('pages/prescricao', { prescricao })
  }).catch(err => console.log(err))  
}
