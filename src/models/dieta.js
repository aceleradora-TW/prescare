const sequelize = require('sequelize')

module.exports = db => db.define('dieta', {
  tipo:sequelize.STRING,
  intervalo:sequelize.STRING,
  observacoes:sequelize.STRING,
})