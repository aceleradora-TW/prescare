const Sequelize = require('sequelize')
const {DATABASE_URL} = require('./settings.js')
const { logger } = require('./logger');

module.exports = {
  connect() {
    return new Sequelize(DATABASE_URL, {
      dialect: 'postgres',
      define: {
        underscored: true,
        timestamps: false,
      },
      logging: logger.debug
    });
  }
};
