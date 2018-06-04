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
<<<<<<< bb21fa6d6124ad7e0079c387520d5dcf259fc62e
  rg:sequelize.STRING,
=======
<<<<<<< 31f8bde1b6fe1d3dbea7fa436c171a0d5d8a6a5e
  rg: sequelize.STRING,
=======
  rg:sequelize.STRING,
>>>>>>> :rocket: <@natymoraes , @diovanemendes> Cria botão salvar e voltar com link #23
>>>>>>> :rocket: <@natymoraes , @diovanemendes> Cria botão salvar e voltar com link #23
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
