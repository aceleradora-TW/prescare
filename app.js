const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const ejs = require('ejs')
const Sequelize = require('sequelize')

const routes = require('./src/routes/routes')
const settings = require('./settings')

const user = require('./public/js/user')
const users = require('./public/js/userArray')

const startApplication = () => {
  const app = express()
  app
    .use(expressLayouts)
    .use(express.static(__dirname + '/public/'))
    .set('view engine', 'ejs')
    .get('/', (req, res) => {
      res.render('pages/home')
    })
    .get('/about', (req, res) => {
      res.render('pages/about', { usuario: user })
    })
    .get('/listaacolhidos', (req, res) => {
      res.render('pages/tableChildren', { users: users })
    })

    .get('/table', routes.table)

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



