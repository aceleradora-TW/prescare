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
<<<<<<< b5692ea198e01b005fc256e3680cb934b49524d5
<<<<<<< 26e5661ff1ceb7faa4e9fa0f11310ef6ba10a1f7
<<<<<<< ff66160b0f34de8e41fc2749e7f82f67dca14fe2
    .use('/', routes.applicationRoutes)
    .use('/acolhido', routes.acolhidoRoutes)
    .use('/acolhido/:acolhido_id/prescricao', routes.prescricaoRoutes)
    .use('/', routes.cuidadoRoutes)
<<<<<<< 66c45d1f076cdd06e2d61897498f8c7064ce76d4
<<<<<<< 68d9f3ccff2b724a766950d7cbe575639d5d5407
=======
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
<<<<<<< e85fd9dfcc250a44ff9bc1ae5de075e68e05ce68
    .get('/acolhido/:acolhido_id/prescricao/:prescricao_id', routes.getPrescricao)
    .post('/acolhido/:acolhido_id/prescricao', routes.createPrescricao)
=======
    .post('/acolhido/:acolhido_id/prescricao', routes.createPrescricao)
    .get('/acolhido/:acolhido_id/prescricao/:prescricao_id', routes.getPrescricao)
>>>>>>> Fazendo o CRUD de prescrição para acolhido, baseado na discussão do dia 01/06/2018
    .get('/acolhido/:acolhido_id/prescricao/:prescricao_id/edit', routes.editPrescricao)
    .post('/acolhido/:acolhido_id/prescricao/:prescricao_id/edit', routes.updatePrescricao)
    .delete('/acolhido/:acolhido_id/prescricao/:prescricao_id', routes.destroyPrescricao)
=======
    .use('/', routes.applicationRoutes)
    .use('/acolhido', routes.acolhidoRoutes)
    .use('/acolhido/:acolhido_id/prescricao', routes.prescricaoRoutes)

>>>>>>> Removendo roteamento do app e utilizando routes index para isso
=======
>>>>>>> :rocket: <@natymoraes , @diovanemendes> Cria botão salvar e voltar com link #23
    
<<<<<<< e85fd9dfcc250a44ff9bc1ae5de075e68e05ce68
    .get('/cuidado/:cuidado_id', routes.getCuidado)
    .post('/acolhido/:acolhido_id/prescricao/:prescricao_id/edit/cuidado', routes.createCuidado)
    .get('/acolhido/:acolhido_id/prescricao/:prescricao_id/edit/cuidado/:cuidado_id/edit', routes.editCuidado)
    .post('/acolhido/:acolhido_id/prescricao/:prescricao_id/edit/cuidado/:cuidado_id/edit', routes.updateCuidado)
>>>>>>> :rocket: <@Claudiastrm, @DiovaneMendes> Adiciona CRUD cuidados #23

=======
>>>>>>> Fazendo o CRUD de prescrição para acolhido, baseado na discussão do dia 01/06/2018
=======

>>>>>>> :bug: <@NatyMoraes , @DiovaneMendes> arrruma bugs
    .listen(settings.PORT, () =>
      console.log('Servidor iniciado em http://localhost:' + settings.PORT)
    );
}

databaseConnection
  .sync()
  .then(startApplication)
  .catch(console.log)
