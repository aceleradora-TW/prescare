const acolhido = require('./acolhido')
const medicamento = require('./medicamento')
const prescricao = require('./prescricao')
const user = require('./user')

module.exports = db => {
  const Acolhido = acolhido(db)
  const Medicamento = medicamento(db)
  const Prescricao = prescricao(db)
  const User = user(db)

  Acolhido.belongsToMany(Medicamento, {through: Prescricao})
  Medicamento.belongsToMany(Acolhido, {through: Prescricao})

  return {Acolhido, Medicamento, Prescricao, User}
}
