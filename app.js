const express = require('express')
const bodyParser = require('body-parser')

const expressLayouts = require('express-ejs-layouts')
const ejs = require('ejs')

const Sequelize = require('sequelize')
const routesInitializer = require('./src/routes')
const modelsInitializer = require('./src/models')

const settings = require('./settings')
const app = express()

const databaseConnection = new Sequelize(settings.DATABASE_URL, {
  dialect: 'postgres',
  define: {
    underscored: true,
    timestamps: false,
  }
})

const models = modelsInitializer(databaseConnection)
const routes = routesInitializer(models)
const startApplication = () => {
  app
    .use(expressLayouts)
    .use(express.static(__dirname + '/public/'))
    .use(bodyParser.urlencoded({
      extended: false
    }))

    .set('view engine', 'ejs')
    .set('views/pages', 'tabela-abas')
    .use('/', routes)
    .listen(settings.PORT, () =>
      console.log('Servidor iniciado em http://localhost:' + settings.PORT)
    );
}

databaseConnection
  .sync()
  .then(startApplication)
  .catch(console.log)
