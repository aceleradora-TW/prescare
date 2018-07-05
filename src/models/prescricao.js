const sequelize = require('sequelize')

module.exports = db => db.define('prescricao', {
  usuario: sequelize.STRING,
  data: sequelize.DATEONLY,
  validade: sequelize.DATEONLY
},
  {
    timestamps: true,
  })
