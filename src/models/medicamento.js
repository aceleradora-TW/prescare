const sequelize = require('sequelize')

module.exports = db => db.define('medicamento', {
  nome: sequelize.STRING,
  via: sequelize.STRING,
  formaFarmaceutica: sequelize.STRING
})