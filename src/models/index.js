const acolhido = require('./acolhido')
const medicamento = require('./medicamento')
const prescricao = require('./prescricao')

module.exports = db => ({
  Acolhido: acolhido(db),
  Medicamento: medicamento(db),
  Prescricao: prescricao(db)
})
