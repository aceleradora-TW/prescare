const sequelize = require('sequelize')

module.exports = db => db.define('usuario', {
  tipo: sequelize.STRING,
  nome: sequelize.STRING,
  senha: sequelize.STRING

  // hooks: {
  //   beforeCreate: (db) => {
  //     // const salt = bcrypt.genSaltSync();
  //     // db.senha = bcrypt.hashSync(db.senha, salt);
  //     db.senha = db.senha;
  //   }
  // }
})
