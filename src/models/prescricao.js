const sequelize = require('sequelize')

module.exports = db => db.define('prescricao', {
<<<<<<< 6c8c9ea9c54affd40c7c5c7a9a1888abf5984be3
  data:sequelize.DATEONLY,
  validade: sequelize.DATEONLY,
})
=======
  id: {
    type: sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  data:sequelize.STRING,
  validade: sequelize.STRING,
},{
  underscored: true
})
>>>>>>> :rocket: <@EngelFlores,@lindicell> Cria models
