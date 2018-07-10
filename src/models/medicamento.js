const sequelize = require('sequelize')

module.exports = db => db.define('medicamento', {
  nome: sequelize.STRING,
  dosagem:sequelize.STRING,
  formaFarmaceutica: sequelize.STRING,
  via: sequelize.STRING,
  posologia: sequelize.STRING,
  observacoes: sequelize.STRING,
  validadeMed: sequelize.STRING,
})