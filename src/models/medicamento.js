
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
<<<<<<< 8db5b842256a5735adb3d7d5f4a005715d41f326
  tipo: sequelize.STRING
=======
>>>>>>> :rocket: <@natymoraes , @diovanemendes> Cria botão salvar e voltar com link #23
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
