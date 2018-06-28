const sequelize = require('sequelize')

module.exports = db => db.define('usuario', {
  tipo: sequelize.STRING,
  nome: sequelize.STRING,
  senha: sequelize.STRING,
})
