const express = require('express')
const Sequelize = require('sequelize')
const expressLayouts = require('express-ejs-layouts')
const ejs = require('ejs')

const user = require('./src/mocks/user')
const routes = require('./src/routes')
const settings = require('./settings')

const startApplication = () => {

  const app = express()

  app
    .use(expressLayouts)
    .use(express.static(__dirname + '/public/'))
    .set('view engine', 'ejs')
    .get('/', routes.home)
    .get('/about', routes.about)
    .get('/acolhidas', routes.listChildren)
    .get('/farmaceutica', routes.prescr)
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
