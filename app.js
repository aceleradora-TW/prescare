const express = require('express')

const expressLayouts = require('express-ejs-layouts')
const ejs = require('ejs')
const acolhido = require('./public/js/acolhido.js')
const Sequelize = require('sequelize')
const routesInitializer = require ('./src/routes')
const modelsInitializer = require ('./src/models')

const tabelaFarmaceutica = require('./src/mocks/tabelaFarmaceutica')
const settings = require('./settings')
const app = express()

const databaseConnection = new Sequelize(settings.DB_NAME, settings.DB_USER, settings.DB_PASSWORD, {
  host: settings.DB_HOST,
  dialect: 'postgres'
})

const startApplication = () => {
  const models = modelsInitializer(databaseConnection)
  const routes = routesInitializer(models)

  app
    .use(expressLayouts)
    .use(express.static(__dirname + '/public/'))
    .set('view engine', 'ejs')
    .set('views/pages', 'tabela-abas')
  
    .get('/login', (req, res) => {
      res.render('pages/login')
    })
    .get('/pesquisar', (req, res) => {
      res.render('pages/pesquisaAcolhidos')
    })
    .get('/historico', (req, res) => {
      res.render('pages/historicoPrescricao')
    })
    .get('/', routes.home)
    .get('/about', routes.about)
    .get('/lista-acolhidos', routes.listaAcolhidos)
    .get('/acolhido/:id', routes.acolhido)
    .get('/prescricaoAtualizada', routes.prescricaoAtualizada)
    .get('/farmaceutica', routes.farmaceutica)
    .listen(settings.PORT, () => console.log('Servidor iniciado em http://localhost:' + settings.PORT))
}

databaseConnection
 .sync()
 .then(startApplication)
 .catch(console.log)
