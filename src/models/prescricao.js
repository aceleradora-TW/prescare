const sequelize = require('sequelize')

module.exports = db => db.define('prescricao', {
  data:sequelize.DATEONLY,
  validade: sequelize.STRING,
  updated_at: sequelize.DataTypes.DATEONLY,
},
{
  timestamps : true,
})
