const acolhido = require('./acolhido')
const medicamento = require('./medicamento')
const prescricao = require('./prescricao')
const cuidado = require('./cuidado')
const dieta = require('./dieta')
const usuario = require('./usuario')


module.exports = db => {
  const Acolhido = acolhido(db)
  const Medicamento = medicamento(db)
  const Prescricao = prescricao(db)
  const Cuidado = cuidado(db)
  const Dieta = dieta(db)
  const Usuario = usuario(db)

  Prescricao.belongsTo(Acolhido)
  Prescricao.hasMany(Medicamento)
  Acolhido.hasMany(Prescricao)
<<<<<<< 68d9f3ccff2b724a766950d7cbe575639d5d5407
<<<<<<< 6c8c9ea9c54affd40c7c5c7a9a1888abf5984be3
=======
>>>>>>> :rocket: <@natymoraes , @diovanemendes> Cria botão salvar e voltar com link #23
  Medicamento.belongsTo(Prescricao)
  Cuidado.belongsTo(Prescricao)
  Dieta.belongsTo(Prescricao)
  Prescricao.belongsToMany(Usuario,{through:'usuario_prescricao'})
<<<<<<< 68d9f3ccff2b724a766950d7cbe575639d5d5407
  Prescricao.hasMany(Cuidado)
  Prescricao.hasMany(Dieta)
=======
  Medicamento.belongsToMany(Prescricao, {through: 'prescricao_medicamento'})
  Cuidado.belongsToMany(Prescricao)
  Dieta.belongsToMany(Prescricao)
  Prescricao.belongsToMany(Usuario)
>>>>>>> :rocket: <@EngelFlores,@lindicell> Cria models

  return {Acolhido, Medicamento, Prescricao, Cuidado, Dieta}
}
=======
>>>>>>> :rocket: <@natymoraes , @diovanemendes> Cria botão salvar e voltar com link #23

  return {Acolhido, Medicamento, Prescricao,Cuidado,Dieta}
}