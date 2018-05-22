const express = require('express')
const Sequelize = require('sequelize')
const expressLayouts = require('express-ejs-layouts')
const ejs = require('ejs')
const index = require ('./src/routes')
const tabelaFarmaceutica = require('./src/mocks/tabelaFarmaceutica')
const userArray = require('./src/mocks/userArray')
const user = require('./src/mocks/user')
const settings = require('./settings')
const farmacia = require('./public/js/farmacia')
const app = express()

const startApplication = () => {
  app
    .use(expressLayouts)
    .use(express.static(__dirname + '/public/'))
    .set('view engine', 'ejs')
    .set('views/pages', 'tabela-abas')
    .set('port', (process.env.PORT || 3000))
    .get('/', index.home)
    .get('/about', index.about)
    .get('/acolhidas', index.listChildren)
    .get('/acolhido', index.acolhido)
    
    .get('/prescricaoAtualizada', (req, res) => {
      res.render('pages/prescricaoAtualizada', { tabelaFarmaceutica: tabelaFarmaceutica})
    })
    .get('/farmaceutica', (req, res) => {
      res.render('pages/farmaceutica', {farmacia : farmacia})
    })
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
