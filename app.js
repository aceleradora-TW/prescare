const bodyParser = require('body-parser')
const expressLayouts = require('express-ejs-layouts')
const express = require('express')
const flash = require('connect-flash')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const Sequelize = require('sequelize')
const routesInitializer = require('./src/routes')
const modelsInitializer = require('./src/models')
const passportInitializer = require('./auth')
const settings = require('./settings')
const database = require('./database')
const { PORT } = require('./settings')
const app = express()
const ejs = require('ejs')

const databaseConnection = new Sequelize(settings.DATABASE_URL, {
  dialect: 'postgres',
  define: {
    underscored: true,
    timestamps: false,
  }
})

const models = modelsInitializer(databaseConnection)
const Passport = passport(models.Usuario)
const routes = routesInitializer(models, Passport)

const startApplication = () => {
  const app = express()

  app
    .use(expressLayouts)
    .use(express.static(__dirname + '/public/'))
    .use(cookieParser())
    .use(bodyParser.urlencoded({ extended: false }))
    .use(session({
      secret: 'me',
      saveUninitialized: false,
      resave: false
    }))
    .use(passport.initialize())
    .use(passport.session())
    .use(flash())
    .use('/', routes)
    .use('/login', login(passport))
    .set('view engine', 'ejs')
    .set('views/pages', 'layout')
    .listen(PORT, () => console.log(`Servidor iniciado em http://localhost:${PORT}`))
}

databaseConnection
  .sync()
  .then(startApplication)
  .catch((error) => {
    console.trace('Erro ao iniciar a aplicacao: ', error.message)
    process.exit(1)
  })