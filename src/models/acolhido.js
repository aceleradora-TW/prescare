const sequelize = require('sequelize')

module.exports = db => db.define('acolhido', {
  nome: sequelize.STRING,
  nascimento: sequelize.STRING,
  peso: sequelize.FLOAT,
  alergias: sequelize.TEXT,
  viaAlimentacao: sequelize.STRING
})