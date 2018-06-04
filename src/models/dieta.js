const sequelize = require('sequelize')

module.exports = db => db.define('acolhido', {
  id: {
    type: sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  tipo:sequelize.STRING,
  intervalo:sequelize.STRING
}, {
  underscored: true
})