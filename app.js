const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const ejs = require('ejs')
<<<<<<< HEAD
const Sequelize = require('sequelize')
const prescricao = require('./src/mocks/prescricao')
const user = require('./src/mocks/user')
const settings = require('./settings')

=======

const settings = require('./settings')
const routes = require('./src/routes')

>>>>>>> 0f020db6e05efc04548182db388ba462b585cd46
const startApplication = () => {
  const app = express()
  app
    .use(expressLayouts)
    .use(express.static(__dirname + '/public/'))
    .set('view engine', 'ejs')
<<<<<<< HEAD
    .get('/', (req, res) => {
      res.render('pages/home')
    })
    .get('/about', (req, res) => {
      res.render('pages/about', { usuario: user })
    })
    .get('/tabela-prescricao', (req, res) => {
      res.render('pages/tabela-prescricao', { prescricoes: prescricao })
    })
    .listen(settings.PORT, () => console.log('Servidor iniciado em http://localhost:' + settings.PORT)
    )
=======
    .get('/', routes.home)
    .get('/about', routes.about)
    .get('/acolhidas', routes.listChildren)
    .listen(settings.PORT, () => console.log('Servidor iniciado em http://localhost:' + settings.PORT))
>>>>>>> 0f020db6e05efc04548182db388ba462b585cd46
}

const databaseClient = new Sequelize(settings.DB_NAME, settings.DB_USER, settings.DB_PASSWORD, {
  host: settings.DB_HOST,
  dialect: 'postgres'
})

databaseClient
  .sync()
  .then(startApplication)
  .catch(console.log)
