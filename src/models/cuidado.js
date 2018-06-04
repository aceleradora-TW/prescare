const sequelize = require('sequelize')

module.exports = db => db.define('acolhido', {
  id: {
    type: sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  descricao:sequelize.STRING,
  intervalo:sequelize.STRING,
  observacoes:sequelize.STRING
}, {
  underscored: true
})