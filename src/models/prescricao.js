const sequelize = require('sequelize')

module.exports = db => db.define('prescricao', {
  usuario:sequelize.STRING,
  data:sequelize.DATEONLY,
  validade: sequelize.DATEONLY,
  updated_at: sequelize.DataTypes.DATE,
},
{
  timestamps: true,
})