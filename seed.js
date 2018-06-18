const database = require('./database')
const modelsInitializer = require('./src/models')

const databaseConnection = database.connect()

const models = modelsInitializer(databaseConnection)

const createAcolhido = () => models.Acolhido.create({
  nome: 'Josicleiso Dores',
  idade: 12,
  rg: '123456',
  peso: 12.5,
  alergias: 'Paracetamol',
  viaAlimentacao: 'Oral'
})

const createPrescricao = (acolhido) => models.Prescricao.create({
  data: Date.now(),
  validade: Date.now(),
  acolhido_id: acolhido.id
})

const createMedicamento = (prescricao) => models.Medicamento.create({
  nome: 'Dorflex',
  intervalo: '8h-8h',
  via: 'Oral',
  formaFarmaceutica: 'Paracetamol',
  dosagem: '1cp',
  validade: '2018',
  lote: '213213iu1griusadoas',
  prescricao_id: prescricao.id
})
.then(() => prescricao)

const createCuidado = (prescricao) => models.Cuidado.create({
  descricao: 'Dar banho',
  intervalo: '12h-12h',
  observacoes: 'Com Jhonsons Baby',
  prescricao_id: prescricao.id
})

const letItCrash = (error) => {
  console.trace('Erro durante o seed:', error.message)
  process.exit(1)
}

const finishWithSuccess = () => process.exit(0)

databaseConnection
  .sync()
  .then(createAcolhido)
  .then(createPrescricao)
  .then(createMedicamento)
  .then(createCuidado)
  .then(finishWithSuccess)
  .catch(letItCrash)
