const express = require('express')
const app = express()
const ejs = require('ejs')
const expressLayouts = require ('express-ejs-layouts')
const routes = require('./src/routes/routes')

app.set('port', (process.env.PORT || 3000))
app.use(expressLayouts)
app.set('view engine','ejs')

app.get('/', (req, res) => {
  res.render('home')
})
app.get('/about', (req, res) => {
  res.render('about', { usuario: user })
})
app.get('/table', routes.table)

app.use(express.static(__dirname + '/public/'))

app.listen(app.get('port'), () =>
  console.log("Servidor rodando na porta: " + app.get('port')))