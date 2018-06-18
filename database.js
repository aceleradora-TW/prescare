const Sequelize = require('sequelize')
const {DATABASE_URL} = require('./settings.js')

module.exports = {
  connect() {
    return new Sequelize(DATABASE_URL, {
      dialect: 'postgres',
      define: {
        underscored: true,
        timestamps: false,
      }
    })
  }
}

