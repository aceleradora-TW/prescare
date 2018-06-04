const sequelize = require('sequelize')

module.exports = db => db.define('prescricao', {
  data:sequelize.STRING,
  validade: sequelize.STRING,
})