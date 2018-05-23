const express = require('express')

const expressLayouts = require('express-ejs-layouts')
const ejs = require('ejs')
const rotas = require ('./src/routes')
const tabelaFarmaceutica = require('./src/mocks/tabelaFarmaceutica')
const usuarios = require('./src/mocks/userArray')
const usuario = require('./src/mocks/user')
const Sequelize = require('sequelize')
const settings = require('./settings')
const app = express()

const startApplication = () => {
  app
    .use(expressLayouts)
    .use(express.static(__dirname + '/public/'))
    .set('view engine', 'ejs')
    .set('views/pages', 'tabela-abas')
    .set('port', (process.env.PORT || 3000))
    .get('/login', rotas.login)
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

databaseClient
  .sync()
  .then(startApplication)
  .catch(console.log)
