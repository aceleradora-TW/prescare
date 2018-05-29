const sequelize = require('sequelize')

module.exports = db => db.define('acolhidos', {
  id: {
    type: sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nome: sequelize.STRING,
  idade: sequelize.INTEGER,
  peso: sequelize.FLOAT,
  alergias: sequelize.STRING,
  via_alimentacao: sequelize.STRING
  },
  {
    timestamps: false
  }
)
