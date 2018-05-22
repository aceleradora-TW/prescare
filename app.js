const express = require('express')
const Sequelize = require('sequelize')
const expressLayouts = require('express-ejs-layouts')
const ejs = require('ejs')

const settings = require('./settings')
const routes = require('./src/routes')

const startApplication = () => {
const app = express()
  app
    .use(expressLayouts)
    .use(express.static(__dirname + '/public/'))
    .set('view engine', 'ejs')
    .set('views/pages', 'tabela-abas')
    .set('port', (process.env.PORT || 3000))

    .get('/', routes.home)
    .get('/about', routes.about)
    .get('/acolhido', routes.acolhido)
    .get('/edit', routes.farmacia)
    .get('/farmaceutica', routes.farmaceutica)
    .get('/prescricaoAtualizada', routes.prescricaoAtualizada)
  
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
