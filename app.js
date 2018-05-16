const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const user = require('./public/js/user')
const ejs = require('ejs')
const farmacia =require('./public/js/farmacia')
const app = express()


app.set('port', (process.env.port || 3000))
app.use(expressLayouts)
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('pages/home')
})
app.get('/about', (req, res) => {
  res.render('pages/about', { usuario: user })
})
app.get('/farmaceutica', (req, res) => {
  res.render('pages/farmaceutica', { farmacia: farmacia })
})
app.use(express.static(__dirname + '/public/'))

app.listen(app.get('port'), () =>
  console.log("Servidor rodando na porta: " + app.get('port')))