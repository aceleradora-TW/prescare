const express = require('express')
const Sequelize = require('sequelize')
const expressLayouts = require('express-ejs-layouts')
const ejs = require('ejs')
const PORT = process.env.PORT || 3000
const DB_NAME = 'prescare'
const DB_USER = 'postgres'
const DB_PASSWORD = 'prescare'
const DB_HOST = 'localhost'
const PORT = process.env.PORT || 3000

const prescricao = require('./public/js/prescricao')
const user = require('./public/js/user')


app.use(expressLayouts)
app.set('view engine','ejs')

app.get('/', (req, res) => {
  res.render('pages/home')
})
app.get('/tabela-prescricao', (req, res) => {
  res.render('pages/tabela-prescricao', { prescricoes: prescricao })
})
app.get('/about', (req, res) => {
  res.render('pages/about', { usuario: user })
})

app.use(express.static(__dirname + '/public/'))

app.listen(PORT, () => console.log('Rodando na porta ' + PORT))

const startApplication = () => {
  const app = express()
  app
    .use(expressLayouts)
    .use(express.static(__dirname + '/public/'))
    .set('view engine', 'ejs')
    .get('/', (req, res) => {
      res.render('home')
    })
    .get('/about', (req, res) => {
      res.render('about', { usuario: user })
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
