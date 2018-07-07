const sequelize = require('sequelize')

module.exports = db => db.define('usuario', {
  nome: sequelize.STRING,
  senha: sequelize.STRING,
  tipo: sequelize.STRING,
})