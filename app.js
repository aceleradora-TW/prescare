const express = require('express')
const bodyParser = require('body-parser')

const expressLayouts = require('express-ejs-layouts')

const flash = require('connect-flash')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const morgan = require('morgan')

const Sequelize = require('sequelize')
const routesInitializer = require('./src/routes')
const modelsInitializer = require('./src/models')
const passportInitializer = require('./auth')

const settings = require('./settings')
const app = express()

const databaseConnection = new Sequelize(settings.DATABASE_URL, {
  dialect: 'postgres',
  define: {
    underscored: true,
    timestamps: false,
  }
})

const models = modelsInitializer(databaseConnection)
const passport = passportInitializer(models.Usuario)
const routes = routesInitializer(models, passport)

const startApplication = () => {
  app
    .use(expressLayouts)
    .use(express.static(__dirname + '/public/'))
    .use(bodyParser.urlencoded({
      extended: false
    }))
    .use(morgan('dev'))
    .use(cookieParser())
    .use(session({ 
      secret: 'ilovescotchscotchyscotchscotch', 
      saveUninitialized: false,
      resave: false
    })) 
    .use(passport.initialize())
    .use(passport.session())
    .use(flash())
    .use('/', routes)
    .set('view engine', 'ejs')
    .set('views/pages', 'tabela-abas')
    .listen(settings.PORT, () =>
    console.log('Servidor iniciado em http://localhost:' + settings.PORT)
   )
}
databaseConnection
  .sync()
  .then(startApplication)
  .catch(console.log)
