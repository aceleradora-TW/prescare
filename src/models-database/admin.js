const sequelize = require('sequelize')

module.exports = db => db.define('admin', {
  
  usuario: sequelize.STRING,

  senha: sequelize.STRING,
  
}, {
  underscored: true
})
