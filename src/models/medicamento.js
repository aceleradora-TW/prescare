
const sequelize = require('sequelize')

module.exports = db => db.define('medicamento', {
  id: {
    type: sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nome: sequelize.STRING,
  intervalo: sequelize.STRING,
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
