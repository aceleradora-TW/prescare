const sequelize = require('sequelize')

module.exports = db => db.define('cuidado', {
  descricao:sequelize.STRING,
  intervalo:sequelize.STRING,
  observacoes:sequelize.STRING,
},
{
  timestamps : false,
})
