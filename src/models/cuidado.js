const sequelize = require('sequelize')

module.exports = db => db.define('cuidado', {
  descricao:sequelize.STRING,
  intervalo:sequelize.STRING,
<<<<<<< bb21fa6d6124ad7e0079c387520d5dcf259fc62e
<<<<<<< 68d9f3ccff2b724a766950d7cbe575639d5d5407
  observacoes:sequelize.TEXT
})
=======
  observacoes:sequelize.STRING
})
>>>>>>> :rocket: <@natymoraes , @diovanemendes> Cria botão salvar e voltar com link #23
=======
<<<<<<< 31f8bde1b6fe1d3dbea7fa436c171a0d5d8a6a5e
  observacoes:sequelize.TEXT
=======
  observacoes:sequelize.STRING
>>>>>>> :rocket: <@natymoraes , @diovanemendes> Cria botão salvar e voltar com link #23
})
>>>>>>> :rocket: <@natymoraes , @diovanemendes> Cria botão salvar e voltar com link #23
