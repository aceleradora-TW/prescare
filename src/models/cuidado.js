module.exports = db => db.define('acolhido', {
  descricao:sequelize.STRING,
  intervalo:sequelize.STRING,
  observacoes:sequelize.TEXT
})
