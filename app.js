const express = require('express')
const app = express()
<<<<<<< 73d8426c4634149479bb79216fd65933de894312
const expressLayouts = require ('express-ejs-layouts')
const user = require('./public/js/user')
const port = 3000
=======
const ejs = require('ejs')
const expressLayouts = require ('express-ejs-layouts')
const routes = require('./src/routes/routes')

app.set('view engine','ejs')
app.use(expressLayouts)
>>>>>>> :construction: <@marcos012, @claudiastrm, @murilobauerc, @DiovaneMendes> adicona ejs, rotas e tabela com scroll

app.set('port', (process.env.PORT || 3000))
app.use(expressLayouts)
app.set('view engine','ejs')


<<<<<<< 73d8426c4634149479bb79216fd65933de894312
app.get('/', (req, res) => {
  res.render('home')
})
app.get('/about', (req, res) => {
  res.render('about', { usuario: user })
})
app.use(express.static(__dirname + '/public/'))

app.listen(port)
console.log('Servidor iniciado em http://localhost:' + port)
=======
app.get('/table', routes.table)

app.listen(app.get('port'), () =>
  console.log("Servidor rodando na porta: "+app.get('port')))

//continuar tutorial
//https://medium.com/@yoobi55/setting-up-heroku-server-with-node-js-express-eng-b0c8cc61a2a9
>>>>>>> :construction: <@marcos012, @claudiastrm, @murilobauerc, @DiovaneMendes> adicona ejs, rotas e tabela com scroll
