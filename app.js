const express = require('express')
<<<<<<< be7e8c05cc19612dd50095ec536bd89eb86a916b
const Sequelize = require('sequelize')
const expressLayouts = require('express-ejs-layouts')
const ejs = require('ejs')
const routes = require('./src/routes/routes')
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
    .get('/', routes.home)
    .get('/about', routes.about)
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
=======
const app = express()
const expressLayouts = require ('express-ejs-layouts')
const user = require('./public/js/user')
const userArr = require ('./public/js/userArray')
const ejs = require('ejs')
const routes = require('./src/routes/routes')

app.set('view engine','ejs')
app.use(expressLayouts)

app.set('port', (process.env.PORT || 3000))

app.get('/', (req, res) => {
  res.render('home')
})
app.get('/about', (req, res) => {
  res.render('about', { usuario: user })
})

app.get('/listaacolhidos', (req, res) =>{
  res.render('table', {usuarioA: userArr})
})
app.use(express.static(__dirname + '/public/'))

app.get('/table', routes.table)

app.listen(app.get('port'), () =>
console.log("Servidor rodando na porta: " + app.get('port')))
>>>>>>> :construction:<@marcos012, @DiovaneMendes> Faz alteracoes
