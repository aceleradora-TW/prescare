const sequelize = require('sequelize')

module.exports = db => db.define('prescricao', {
<<<<<<< bb21fa6d6124ad7e0079c387520d5dcf259fc62e
<<<<<<< 68d9f3ccff2b724a766950d7cbe575639d5d5407
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
=======
  data:sequelize.STRING,
  validade: sequelize.STRING,
})
>>>>>>> :rocket: <@natymoraes , @diovanemendes> Cria botão salvar e voltar com link #23
=======
<<<<<<< 31f8bde1b6fe1d3dbea7fa436c171a0d5d8a6a5e
  data:sequelize.DATEONLY,
  validade: sequelize.DATEONLY,
=======
  data:sequelize.STRING,
  validade: sequelize.STRING,
>>>>>>> :rocket: <@natymoraes , @diovanemendes> Cria botão salvar e voltar com link #23
})
>>>>>>> :rocket: <@natymoraes , @diovanemendes> Cria botão salvar e voltar com link #23
