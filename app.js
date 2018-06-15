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

const settings = require('./settings')
const app = express()
const login = require('./src/routes/index')(app, passport)

const databaseConnection = new Sequelize(settings.DATABASE_URL, {
  dialect: 'postgres',
  define: {
    underscored: true,
    timestamps: false,
  }
})

const models = modelsInitializer(databaseConnection)
const routes = routesInitializer(models)

const startApplication = () => {
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
    .set('view engine', 'ejs')
    .set('views/pages', 'tabela-abas')
    .get('/', function(req,res){
      res.render('pages/login', { message: req.flash('loginMessage')})
    })
    .listen(settings.PORT, () =>
    console.log('Servidor iniciado em http://localhost:' + settings.PORT)
   );

    function isLoggedIn(req, res, next) {

      // if user is authenticated in the session, carry on 
      if (req.isAuthenticated())
          return next();
  
      // if they aren't redirect them to the home page
      res.redirect('/');
  }
}
databaseConnection
  .sync()
  .then(startApplication)
  .catch(console.log)