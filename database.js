const Sequelize = require('sequelize')
const Op = Sequelize.Op
const {DATABASE_URL} = require('./settings.js')
const { logger } = require('./logger')

module.exports = {
  connect() {
    return new Sequelize(DATABASE_URL, {
      dialect: 'postgres',
      define: {
        underscored: true,
        timestamps: false
      },
      logging: logger.debug,
      operatorsAliases: {
        $and: Op.and,
        $or: Op.or,
        $eq: Op.eq,
        $gt: Op.gt,
        $lt: Op.lt,
        $lte: Op.lte,
        $like: Op.like
      },
      dialectOptions: {
        ssl: true /* for SSL config since Heroku gives you this out of the box */
      }
    })
  }
}
