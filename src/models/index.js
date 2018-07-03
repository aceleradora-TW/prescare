const acolhido = require('./acolhido')
const medicamento = require('./medicamento')
const dieta = require('./dieta')
const prescricao = require('./prescricao')
const cuidado = require('./cuidado')
const usuario = require('./usuario')

module.exports = db => {
  const Acolhido = acolhido(db)
  const Medicamento = medicamento(db)
  const Dieta = dieta(db)
  const Prescricao = prescricao(db)
  const Cuidado = cuidado(db)
  const Usuario = usuario(db)

  Prescricao.belongsTo(Acolhido)
  Prescricao.hasMany(Medicamento)
  Acolhido.hasMany(Prescricao)
  Medicamento.belongsTo(Prescricao)
  Dieta.belongsTo(Prescricao)
  Cuidado.belongsTo(Prescricao)
  Prescricao.belongsToMany(Usuario, {through:'usuario_prescricao'})
  Prescricao.hasMany(Dieta)
  Prescricao.hasMany(Cuidado)

  return { Acolhido, Medicamento, Prescricao, Cuidado, Dieta, Usuario }
}
