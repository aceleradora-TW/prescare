const sequelize = require('sequelize')

module.exports = db => db.define('prescricao', {
  data:sequelize.DATEONLY,
  validade: sequelize.DATEONLY,
})

  id: {
    type: sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },

  underscored: true
})
