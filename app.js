const express = require('express')
const Sequelize = require('sequelize')
const expressLayouts = require('express-ejs-layouts')
const ejs = require('ejs')
const rotas = require ('./src/routes')
const tabelaFarmaceutica = require('./src/mocks/tabelaFarmaceutica')
const usuarios = require('./src/mocks/userArray')
const usuario = require('./src/mocks/user')
const settings = require('./settings')
const app = express()


const startApplication = () => {
  app
    .use(expressLayouts)
    .use(express.static(__dirname + '/public/'))
    .set('view engine', 'ejs')
    .set('views/pages', 'tabela-abas')
    .set('port', (process.env.PORT || 3000))
    .get('/', rotas.home)
    .get('/about', rotas.about)
    .get('/acolhidas', rotas.listChildren)
    .get('/acolhido', rotas.acolhido)
    .get('/prescricaoAtualizada', rotas.prescricaoAtualizada)
    .get('/farmaceutica', rotas.farmaceutica)
    .listen(settings.PORT, () => console.log('Servidor iniciado em http://localhost:' + settings.PORT))
}

const databaseClient = new Sequelize(settings.DB_NAME, settings.DB_USER, settings.DB_PASSWORD, {
  host: settings.DB_HOST,
  dialect: 'postgres'
})



  /*BANCO*/
  const initializeModels = require('./views/src/models')

  const {Acolhido, Medicamento, Prescricao} = initializeModels(databaseClient)

  /*INSERINDO CONTEUDO NA TABELA*/
  const criaExemplos = () => {

    Acolhido.create({
      nome: 'Silva',
      idade: 15
    })

    Medicamento.create({
      nome: 'Pantoprazol'
    })

  //  Prescricao.create({
  //    intervalo: '16h',
  //    acolhidoId: 1,
  //    medicamentoId: 1
  //  })
  }
  //=================================================================================
databaseClient
 .sync()
 .then(criaExemplos)
 .then(startApplication)
 .catch(console.log)
