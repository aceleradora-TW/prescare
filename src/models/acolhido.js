const sequelize = require('sequelize')

module.exports = db => db.define('acolhido', {
  id: {
    type: sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nome: sequelize.STRING,
  idade: sequelize.INTEGER,
  rg:sequelize.INTEGER,
  peso: sequelize.FLOAT,
  alergias: sequelize.STRING,
  viaAlimentacao: sequelize.STRING
}, {
  underscored: true
})
