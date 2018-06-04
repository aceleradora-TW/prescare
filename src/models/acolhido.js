const sequelize = require('sequelize')

module.exports = db => db.define('acolhido', {
<<<<<<< 68d9f3ccff2b724a766950d7cbe575639d5d5407
<<<<<<< 6c8c9ea9c54affd40c7c5c7a9a1888abf5984be3
=======
  id: {
    type: sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
>>>>>>> :rocket: <@EngelFlores,@lindicell> Cria models
=======
>>>>>>> :rocket: <@natymoraes , @diovanemendes> Cria botão salvar e voltar com link #23
  nome: sequelize.STRING,
  idade: sequelize.INTEGER,
  rg:sequelize.STRING,
  peso: sequelize.FLOAT,
<<<<<<< 6c8c9ea9c54affd40c7c5c7a9a1888abf5984be3
  alergias: sequelize.TEXT,
  viaAlimentacao: sequelize.STRING
})
=======
  alergias: sequelize.STRING,
  viaAlimentacao: sequelize.STRING
<<<<<<< 68d9f3ccff2b724a766950d7cbe575639d5d5407
}, {
  underscored: true
})
>>>>>>> :rocket: <@EngelFlores,@lindicell> Cria models
=======
})
>>>>>>> :rocket: <@natymoraes , @diovanemendes> Cria botão salvar e voltar com link #23
