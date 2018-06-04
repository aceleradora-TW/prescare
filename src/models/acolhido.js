const sequelize = require('sequelize')

module.exports = db => db.define('acolhido', {
  id: {
    type: sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
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
  alergias: sequelize.TEXT,
  viaAlimentacao: sequelize.STRING
})
