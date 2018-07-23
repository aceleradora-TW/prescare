const bodyParser = require('body-parser')
const expressLayouts = require('express-ejs-layouts')
const express = require('express')
const flash = require('connect-flash')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const { logger, loggerMiddleware } = require('./logger')
const routesInitializer = require('./src/routes')
const modelsInitializer = require('./src/models')
const passportInitializer = require('./auth')
const { PORT, SECRET } = require('./settings')
const database = require('./database')

const databaseConnection = database.connect()

const models = modelsInitializer(databaseConnection)
const passport = passportInitializer(models.Usuario)
const routes = routesInitializer(models, passport)

const startApplication = () => {
  const app = express()

  app
    .set('view engine', 'ejs')
    .set('views/pages', 'layout')
    .use(expressLayouts)
    .use('/public', express.static(__dirname + '/public/'))
    .use(cookieParser())
    .use(bodyParser.urlencoded({ extended: false }))
    .use(session({
      secret: SECRET,
      saveUninitialized: false,
      resave: false
    }))
    .use(passport.initialize())
    .use(passport.session())
    .use(flash())
    .use(loggerMiddleware())
    .use('/', routes)
    .listen(PORT, () => logger.info(`Servidor iniciado em http://localhost:${PORT}`))
}

databaseConnection
  .sync()
  .then(startApplication)
  .catch((error) => {
    logger.error('Erro ao iniciar a aplicacao: ', error.message)
    process.exit(1)
  })
