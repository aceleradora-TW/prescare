const sequelize = require('sequelize')

module.exports = db => db.define('prescricao', {
  intervalo: sequelize.STRING
})