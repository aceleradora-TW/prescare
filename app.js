const express = require('express')
const app = express()
const expressLayouts = require ('express-ejs-layouts')
const ejs = require('ejs')
const routes = require('./src/routes/routes')
const Sequelize = require('sequelize')
const PORT = process.env.PORT || 3000
const DB_NAME = 'prescare'
const DB_USER = 'postgres'
const DB_PASSWORD = 'prescare'
const DB_HOST = 'localhost'

const user = require('./public/js/user')
const userArr = require ('./public/js/userArray')

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
    .get('/listaacolhidos', (req, res) =>{
      res.render('pages/tableChildren', {usuarioA: userArr})
    })
    .listen(PORT, () => console.log('Servidor iniciado em http://localhost:' + PORT)
  )
}

const databaseClient = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    dialect: 'postgres'
})

databaseClient
 .sync()
 .then(startApplication)
 .catch(console.log)
