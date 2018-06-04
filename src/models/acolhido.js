const sequelize = require('sequelize')

module.exports = db => db.define('acolhido', {
<<<<<<< 6c8c9ea9c54affd40c7c5c7a9a1888abf5984be3
=======
  id: {
    type: sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
>>>>>>> :rocket: <@EngelFlores,@lindicell> Cria models
  nome: sequelize.STRING,
  idade: sequelize.INTEGER,
  rg:sequelize.INTEGER,
  peso: sequelize.FLOAT,
<<<<<<< 6c8c9ea9c54affd40c7c5c7a9a1888abf5984be3
  alergias: sequelize.TEXT,
  viaAlimentacao: sequelize.STRING
})
=======
  alergias: sequelize.STRING,
  viaAlimentacao: sequelize.STRING
}, {
  underscored: true
})
>>>>>>> :rocket: <@EngelFlores,@lindicell> Cria models
