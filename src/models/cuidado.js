const sequelize = require('sequelize')

module.exports = db => db.define('cuidado', {
  descricao:sequelize.STRING,
  intervalo:sequelize.STRING,
<<<<<<< 68d9f3ccff2b724a766950d7cbe575639d5d5407
  observacoes:sequelize.TEXT
})
=======
  observacoes:sequelize.STRING
})
>>>>>>> :rocket: <@natymoraes , @diovanemendes> Cria botão salvar e voltar com link #23
