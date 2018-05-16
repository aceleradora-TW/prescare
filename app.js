const express = require('express')
const app = express()

const expressLayouts = require('express-ejs-layouts')
const ejs = require('ejs')
const acolhido = require('./public/js/acolhido.js')

app.set('view engine', 'ejs')
app.use(expressLayouts)
app.set('port', (process.env.PORT || 3000))

app.get('/', (req, res) => {
  res.render('home')
})

app.get('/about', (req, res) => {
  res.render('about', { usuario: user })
})

app.get('/acolhido', (req, res) => {
  res.render('pages/info', { acolhido: acolhido })
})
app.use(express.static(__dirname + '/public'));

app.listen(app.get('port'), () =>
  console.log("Servidor rodando na porta: " + app.get('port')))

//continuar tutorial
//https://medium.com/@yoobi55/setting-up-heroku-server-with-node-js-express-eng-b0c8cc61a2a9


