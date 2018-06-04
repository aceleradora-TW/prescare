
const sequelize = require('sequelize')

module.exports = db => db.define('medicamento', {
  nome: sequelize.STRING,
  intervalo: sequelize.STRING,
<<<<<<< 6c8c9ea9c54affd40c7c5c7a9a1888abf5984be3
  via: sequelize.STRING,
  formaFarmaceutica: sequelize.STRING,
  dosagem:sequelize.STRING,
  validade:sequelize.STRING,
  lote:sequelize.STRING,
<<<<<<< bb21fa6d6124ad7e0079c387520d5dcf259fc62e
})
=======
  dosagem:sequelize.STRING,
  validade:sequelize.STRING,
  lote:sequelize.STRING,
  via: sequelize.STRING,
  formaFarmaceutica: sequelize.STRING
<<<<<<< 68d9f3ccff2b724a766950d7cbe575639d5d5407
},
{
  underscored: true
})
>>>>>>> :rocket: <@EngelFlores,@lindicell> Cria models
=======
})
>>>>>>> :rocket: <@natymoraes , @diovanemendes> Cria botão salvar e voltar com link #23
=======
<<<<<<< 31f8bde1b6fe1d3dbea7fa436c171a0d5d8a6a5e
=======
  via: sequelize.STRING,
  formaFarmaceutica: sequelize.STRING
>>>>>>> :rocket: <@natymoraes , @diovanemendes> Cria botão salvar e voltar com link #23
})
>>>>>>> :rocket: <@natymoraes , @diovanemendes> Cria botão salvar e voltar com link #23
