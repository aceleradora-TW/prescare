const express = require('express')

const expressLayouts = require('express-ejs-layouts')
const ejs = require('ejs')
const acolhido = require('./public/js/acolhido.js')
const Sequelize = require('sequelize')
const routesInitializer = require('./src/routes')
const modelsInitializer = require('./src/models')

const tabelaFarmaceutica = require('./src/mocks/tabelaFarmaceutica')
const settings = require('./settings')
const app = express()

const databaseConnection = new Sequelize(settings.DATABASE_URL, { dialect: 'postgres' })

const models = modelsInitializer(databaseConnection)
const routes = routesInitializer(models)

const startApplication = () => {
  app
    .use(expressLayouts)
    .use(express.static(__dirname + '/public/'))
    .set('view engine', 'ejs')
    .get('/pesquisar', (req, res) => {
      res.render('pages/pesquisa-acolhidos')
    })
    .get('/historico', (req, res) => {
      res.render('pages/historico-prescricao')
    })
    .set('views/pages', 'tabela_abas')
    .get('/login', rotas.login)
    .get('/', rotas.home)
    .get('/about', rotas.about)
    .get('/acolhidas', rotas.listChildren)
    .get('/acolhido', rotas.acolhido)
    .get('/prescricaoAtualizada', rotas.prescricaoAtualizada)
    .get('/farmaceutica', rotas.farmaceutica)
    .listen(settings.PORT, () => console.log('Servidor iniciado em http://localhost:' + settings.PORT))
}

databaseConnection
  .sync()
  .then(startApplication)
  .catch(console.log)