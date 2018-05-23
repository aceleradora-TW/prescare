const Sequelize = require('sequelize')

module.exports = Sequelize.Model('Project', {
    name: String,
})