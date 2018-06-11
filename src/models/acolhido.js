const sequelize = require('sequelize')

module.exports = db => db.define('acolhido', {
  nome: sequelize.STRING,
  idade: sequelize.INTEGER,
  peso: sequelize.FLOAT,
  alergias: sequelize.TEXT,
<<<<<<< 00b3fc89656598c0bacefbad3b13b96302517e68
<<<<<<< 145c72f8682524c7ce0fbcfbe559e88a7c19c30b
  viaAlimentacao: sequelize.STRING
})
=======
  via_alimentacao: sequelize.STRING
})
>>>>>>> :rocket: <@ilizakoski, @murilobauerc, @luizfetrindade> Rodar com test está ok
=======
  viaAlimentacao: sequelize.STRING
})
>>>>>>> :art: <@EngelFlores,@murilobauerc> Refatora ver prescricao acolhido
