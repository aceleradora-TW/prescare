const sequelize = require('sequelize')

module.exports = db => db.define('prescricao', {
  id: {
    type: sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  data:sequelize.STRING,
  validade: sequelize.STRING,

})
