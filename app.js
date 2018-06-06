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
    .set('view engine', 'ejs')
    .set('views/pages', 'tabela-abas')
<<<<<<< ff66160b0f34de8e41fc2749e7f82f67dca14fe2
    .use('/', routes.applicationRoutes)
    .use('/acolhido', routes.acolhidoRoutes)
    .use('/acolhido/:acolhido_id/prescricao', routes.prescricaoRoutes)
    .use('/', routes.cuidadoRoutes)
=======

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

    .get('/acolhido/:acolhido_id', routes.acolhido)
    .get('/acolhido/:acolhido_id/prescricao/:prescricao_id', routes.getPrescricao)
    .post('/acolhido/:acolhido_id/prescricao', routes.createPrescricao)
    .get('/acolhido/:acolhido_id/prescricao/:prescricao_id/edit', routes.editPrescricao)
    .post('/acolhido/:acolhido_id/prescricao/:prescricao_id/edit', routes.updatePrescricao)
    .delete('/acolhido/:acolhido_id/prescricao/:prescricao_id', routes.destroyPrescricao)
    
    .get('/cuidado/:cuidado_id', routes.getCuidado)
    .post('/acolhido/:acolhido_id/prescricao/:prescricao_id/edit/cuidado', routes.createCuidado)
    .get('/acolhido/:acolhido_id/prescricao/:prescricao_id/edit/cuidado/:cuidado_id/edit', routes.editCuidado)
    .post('/acolhido/:acolhido_id/prescricao/:prescricao_id/edit/cuidado/:cuidado_id/edit', routes.updateCuidado)
>>>>>>> :rocket: <@Claudiastrm, @DiovaneMendes> Adiciona CRUD cuidados #23

    .listen(settings.PORT, () =>
      console.log('Servidor iniciado em http://localhost:' + settings.PORT)
    );
}

databaseConnection
  .sync()
  .then(startApplication)
  .catch(console.log)
