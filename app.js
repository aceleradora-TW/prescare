const express = require('express')
const app = express()
const expressLayouts = require ('express-ejs-layouts')
const user = require('./public/js/user')
const ejs = require('ejs')
const routes = require('./src/routes/routes')

app.set('view engine','ejs')
app.use(expressLayouts)

app.set('port', (process.env.PORT || 3000))

app.get('/', (req, res) => {
  res.render('home')
})
app.get('/about', (req, res) => {
  res.render('about', { usuario: user })
})

app.get('/listaacolhidos', (req, res) =>{
  res.render('table')
})
app.use(express.static(__dirname + '/public/'))

app.get('/table', routes.table)

app.listen(app.get('port'), () =>
  console.log("Servidor rodando na porta: "+app.get('port')))
