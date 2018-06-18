const express = require('express')
const bodyParser = require('body-parser')
const expressLayouts = require('express-ejs-layouts')
const ejs = require('ejs')

const passport = require('passport')
const flash = require('connect-flash')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const morgan = require('morgan')

const Sequelize = require('sequelize')
const routesInitializer = require('./src/routes')
const modelsInitializer = require('./src/models')
const database = require('./database')
const {PORT} = require('./settings')

const app = express()

const authConfig = require('./auth');
const login = require('./src/routes/login/index')

const databaseConnection = database.connect()

const models = modelsInitializer(databaseConnection)
const routes = routesInitializer(models)
const startApplication = () => {
  authConfig(models.Usuario, passport)

  app
    .use(expressLayouts)
    .use(express.static(__dirname + '/public/'))
    .use(bodyParser.urlencoded({
      extended: false
    }))
    .use(morgan('dev'))
    .use(cookieParser())
    .use(bodyParser())
    .use(session({ secret: 'ilovescotchscotchyscotchscotch' })) // session secret
    .use(passport.initialize())
    .use(passport.session()) // persistent login sessions
    .use(flash()) // use connect-flash for flash messages stored in session
    .use('/', routes)
    .use('/login', login(passport))
    .set('view engine', 'ejs')
    .set('views/pages', 'tabela-abas')
    .listen(settings.PORT, () =>
    console.log('Servidor iniciado em http://localhost:' + settings.PORT)
   );
}

databaseConnection
  .sync()
  .then(startApplication)
  .catch(console.log)
