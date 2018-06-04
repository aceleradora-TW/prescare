const express = require('express')
const bodyParser = require('body-parser')

const expressLayouts = require('express-ejs-layouts')
const ejs = require('ejs')

const Sequelize = require('sequelize')
const routesInitializer = require('./src/routes')
const modelsInitializer = require('./src/models')

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
<<<<<<< 1952977f32dc5a395b11390ee508e1508dbfe73b
    .use('/', routes)
<<<<<<< 2f25286f1b326a763134803cedcbc7c30c92200b
=======
=======
<<<<<<< 26e5661ff1ceb7faa4e9fa0f11310ef6ba10a1f7
<<<<<<< ff66160b0f34de8e41fc2749e7f82f67dca14fe2
    .use('/', routes.applicationRoutes)
    .use('/acolhido', routes.acolhidoRoutes)
    .use('/acolhido/:acolhido_id/prescricao', routes.prescricaoRoutes)
<<<<<<< 8db5b842256a5735adb3d7d5f4a005715d41f326
<<<<<<< 5f51f3b721cc3a1a573b6dabbcec7ebf5bc8b44a
<<<<<<< efa330f1a2826826df87d04f2b83c8ad7d9188ff
<<<<<<< 72f21ded2a071b97b1511736435ebb24b8100284
<<<<<<< 2e8aad72f780da8e1532b0dde5cd55d8d94a19f8
    .use('/', routes.cuidadoRoutes)
=======
<<<<<<< d1560f0516fbd3c191936b3fbaf66bee77306862
<<<<<<< 5ea9029118c6845df1be84661f4fbc566a5892dd
<<<<<<< 262c4491b7590eaf8e244a04e2b5a10ca05903c6
>>>>>>> :bug: <@NatyMoraes , @DiovaneMendes> arrruma bugs
=======
>>>>>>> Removendo roteamento do app e utilizando routes index para isso
    .use('/acolhido/:acolhido_id/prescricao/:prescricao_id/cuidado/', routes.cuidadoRoutes)
    .use('/acolhido/:acolhido_id/prescricao/:prescricao_id/edit/cuidado/', routes.cuidadoRoutes)

    .get('/login', (req, res) => {
      res.render('pages/login');
    })
    .get('/pesquisar', (req, res) => {
      res.render('pages/pesquisa-acolhidos');
    })
    .get('/historico', (req, res) => {
      res.render('pages/historico-prescricao');
    })
    .get('/acolhido/:acolhido_id/prescricao/:prescricao_id/edit', routes.editPrescricao)
    .post('/acolhido/:acolhido_id/prescricao/:prescricao_id/edit', routes.updatePrescricao)
    .delete('/acolhido/:acolhido_id/prescricao/:prescricao_id', routes.destroyPrescricao)
<<<<<<< 1952977f32dc5a395b11390ee508e1508dbfe73b

=======
=======
    .use('/', routes.applicationRoutes)
    .use('/acolhido', routes.acolhidoRoutes)
    .use('/acolhido/:acolhido_id/prescricao', routes.prescricaoRoutes)

>>>>>>> Removendo roteamento do app e utilizando routes index para isso
    
<<<<<<< e85fd9dfcc250a44ff9bc1ae5de075e68e05ce68
>>>>>>> Removendo roteamento do app e utilizando routes index para isso
    .get('/cuidado/:cuidado_id', routes.getCuidado)
    .post('/acolhido/:acolhido_id/prescricao/:prescricao_id/edit/cuidado', routes.createCuidado)
    .get('/acolhido/:acolhido_id/prescricao/:prescricao_id/edit/cuidado/:cuidado_id/edit', routes.editCuidado)
    .post('/acolhido/:acolhido_id/prescricao/:prescricao_id/edit/cuidado/:cuidado_id/edit', routes.updateCuidado)
    .get('/cuidado/:cuidado_id', routes.getCuidado)
    .post('/acolhido/:acolhido_id/prescricao/:prescricao_id/edit/cuidado', routes.createCuidado)
    .get('/acolhido/:acolhido_id/prescricao/:prescricao_id/edit/cuidado/:cuidado_id/edit', routes.editCuidado)
    .post('/acolhido/:acolhido_id/prescricao/:prescricao_id/edit/cuidado/:cuidado_id/edit', routes.updateCuidado)
    .get('/acolhido/:acolhido_id/prescricao/:prescricao_id', routes.getPrescricao)
    .post('/acolhido/:acolhido_id/prescricao', routes.createPrescricao)
    .get('/acolhido/:acolhido_id/prescricao/:prescricao_id/edit', routes.editPrescricao)
    .post('/acolhido/:acolhido_id/prescricao/:prescricao_id/edit', routes.updatePrescricao)
    .delete('/acolhido/:acolhido_id/prescricao/:prescricao_id', routes.destroyPrescricao)
    .use('/', routes.cuidadoRoutes)
    .get('/cuidado/:cuidado_id', routes.getCuidado)
    .post('/acolhido/:acolhido_id/prescricao/:prescricao_id/edit/cuidado', routes.createCuidado)
    .get('/acolhido/:acolhido_id/prescricao/:prescricao_id/edit/cuidado/:cuidado_id/edit', routes.editCuidado)
    .post('/acolhido/:acolhido_id/prescricao/:prescricao_id/edit/cuidado/:cuidado_id/edit', routes.updateCuidado)
>>>>>>> Removendo roteamento do app e utilizando routes index para isso
.listen(settings.PORT, () =>
      console.log('Servidor iniciado em http://localhost:' + settings.PORT)
    );
}

databaseConnection
  .sync()
  .then(startApplication)
  .catch(console.log)
