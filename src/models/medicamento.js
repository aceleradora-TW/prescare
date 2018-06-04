
const sequelize = require('sequelize')

module.exports = db => db.define('medicamento', {
  id: {
    type: sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nome: sequelize.STRING,
  intervalo: sequelize.STRING,
<<<<<<< 6c8c9ea9c54affd40c7c5c7a9a1888abf5984be3
  via: sequelize.STRING,
  formaFarmaceutica: sequelize.STRING,
  dosagem:sequelize.STRING,
  validade:sequelize.STRING,
  lote:sequelize.STRING,
})
=======
  dosagem:sequelize.STRING,
  validade:sequelize.STRING,
  lote:sequelize.STRING,
  via: sequelize.STRING,
  formaFarmaceutica: sequelize.STRING
},
{
  underscored: true
})
>>>>>>> :rocket: <@EngelFlores,@lindicell> Cria models
