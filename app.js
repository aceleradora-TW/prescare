const express = require('express')
const bodyParser = require('body-parser')
const expressLayouts = require('express-ejs-layouts')
const ejs = require('ejs')

const Sequelize = require('sequelize')

const routesInitializer = require('./src/routes')
const modelsInitializer = require('./src/models')
const database = require('./database')
const {PORT} = require('./settings')

const app = express()

const databaseConnection = database.connect()

const models = modelsInitializer(databaseConnection)
const routes = routesInitializer(models)

const startApplication = () => {
  app
    .use(expressLayouts)
    .use(express.static(__dirname + '/public/'))
    .use(bodyParser.urlencoded({ extended: false }))
    .set('view engine', 'ejs')
    .set('views/pages', 'tabela-abas')
    .use('/', routes)
    .listen(PORT, () => console.log(`Servidor iniciado em http://localhost:${PORT}`))
}

databaseConnection
  .sync()
  .then(startApplication)
  .catch((error) => {
    console.trace('Erro ao iniciar a aplicacao: ', error.message)
    process.exit(1)
  })
