const sequelize = require('sequelize')

module.exports = db => db.define('user', {
  username: sequelize.STRING,
  password: sequelize.STRING
},
{
  underscored: true
})
