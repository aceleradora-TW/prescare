const express = require('express')
const bodyParser = require('body-parser')

const expressLayouts = require('express-ejs-layouts')
const ejs = require('ejs')
const Sequelize = require('sequelize')
const routesInitializer = require('./src/routes')
const modelsInitializer = require('./src/models')

const tabelaFarmaceutica = require('./src/mocks/tabelaFarmaceutica')
const settings = require('./settings')
const app = express()

const databaseConnection = new Sequelize(settings.DATABASE_URL, {dialect: 'postgres'})

const models = modelsInitializer(databaseConnection)
const routes = routesInitializer(models)

const startApplication = () => {
  app
    .use(expressLayouts)
    .use(express.static(__dirname + '/public/'))
    .use(bodyParser.urlencoded({
      extended: false
    }))
    .set('view engine', 'ejs')
    .set('views/pages', 'tabela-abas')

    .get('/login', (req, res) => {
      res.render('pages/login');
    })
    .get('/pesquisar', (req, res) => {
      res.render('pages/pesquisa-acolhidos');
    })
    .get('/historico', (req, res) => {
      res.render('pages/historico-prescricao');
    })
    .get('/', routes.home)
    .get('/about', routes.about)
    .get('/lista-acolhidos', routes.listaAcolhidos)
    .get('/prescricao-atualizada', routes.prescricaoAtualizada)
    .get('/farmaceutica', routes.farmaceutica)

    .delete('/acolhido/:acolhido_id/prescricao/:prescricao_id', routes.destroyPrescricao)
    .post('/acolhido/:acolhido_id/prescricao', routes.createPrescricao)
    .get('/acolhido/:acolhido_id/prescricao/:prescricao_id', routes.getPrescricao)
    .get('/acolhido/:acolhido_id/prescricao/:prescricao_id/edit', routes.editPrescricao)
    .post('/acolhido/:acolhido_id/prescricao/:prescricao_id/edit', routes.updatePrescricao)

    .use('/acolhido', routes.acolhidoRotas)

    .listen(settings.PORT, () =>
      console.log('Servidor iniciado em http://localhost:' + settings.PORT)
    );
}

databaseConnection
  .sync()
  .then(startApplication)
  .catch(console.log)
