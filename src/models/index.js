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
  Prescricao.hasMany(Cuidado)
  Prescricao.hasMany(Dieta)
  Medicamento.belongsToMany(Prescricao, {through: 'prescricao_medicamento'})
  Cuidado.belongsToMany(Prescricao)
  Dieta.belongsToMany(Prescricao)
  Prescricao.belongsToMany(Usuario)

  return {Acolhido, Medicamento, Prescricao, Cuidado, Dieta}
}
