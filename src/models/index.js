const acolhido = require('./acolhido')
const medicamento = require('./medicamento')
const prescricao = require('./prescricao')

module.exports = db => {
  const Acolhido = acolhido(db)
  const Medicamento = medicamento(db)
  const Prescricao = prescricao(db)

  Prescricao.belongsTo(Acolhido)
  Prescricao.hasMany(Medicamento)
  Acolhido.hasMany(Prescricao)
  Medicamento.belongsToMany(Prescricao, {through: 'prescricao_medicamento'})
  Cuidado.belongsToMany(Prescricao)
  Dieta.belongsToMany(Prescricao)
  Prescricao.belongsToMany(Usuario)

  return {Acolhido, Medicamento, Prescricao}
}

// exibir prescricao com os medicamentos 
// como introduzir ele no projeto
// como ele funciona por de trás dos panos 
// comandos 
// End to End (baby steps)
// pq usar 
// exemplo no projeto 
// quisso
// ORM 
// CRUD 
// QUERY 