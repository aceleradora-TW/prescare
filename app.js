const express = require('express')
const Sequelize = require('sequelize')
const expressLayouts = require('express-ejs-layouts')
const ejs = require('ejs')
const farmacia =require('./public/js/farmacia')
const user = require('./public/js/user')
const userArray = require('./public/js/userArray')
const tabelaFarmaceutica = require('./public/js/tabelaFarmaceutica')
const PORT = process.env.PORT || 3000
const DB_NAME = 'prescare'
const DB_USER = 'postgres'
const DB_PASSWORD = 'prescare'
const DB_HOST = 'localhost'

const startApplication = () => {

  const app = express()

  app
    .use(expressLayouts)
    .use(express.static(__dirname + '/public/'))
    .set('view engine', 'ejs')
    .set('views/pages', 'tabela-abas')
    .set('port', (process.env.PORT || 3000))
    .get('/', (req, res) => {
      res.render('pages/home')
    })
    .get('/about', (req, res) => {
      res.render('pages/about', { usuario: user })
    })
    .get('/prescricaoAtualizada', (req, res) => {
      res.render('pages/prescricaoAtualizada', { tabelaFarmaceutica: tabelaFarmaceutica})
    })
    .get('/prescricaoAtualizadona', (req, res) => {
      res.render('pages/prescricaoAtualizada', { usuarioArray : userArray})
    })
    .get('/acolhido', (req, res) => {
      res.render('pages/info', {acolhido:acolhido})
    })

    .get('/renderiza', (req, res) => {
      res.render('pages/renderiza', { tabelaFarmaceutica : tabelaFarmaceutica})
    })

    .listen(PORT, () => console.log('Servidor iniciado em http://localhost:' + PORT))
    }

  const databaseClient = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
      host: DB_HOST,
      dialect: 'postgres'
  })

databaseClient
 .sync()
 .then(startApplication)
 .catch(console.log)
