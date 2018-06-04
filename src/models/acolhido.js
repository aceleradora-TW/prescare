const sequelize = require('sequelize')

module.exports = db => db.define('acolhido', {
  nome: sequelize.STRING,
  idade: sequelize.INTEGER,
  rg:sequelize.STRING,
  peso: sequelize.FLOAT,
  alergias: sequelize.STRING,
  viaAlimentacao: sequelize.STRING
})