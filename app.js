const express = require('express')
const app = express()
const expressLayouts = require ('express-ejs-layouts')
const ejs = require('ejs')

const user = require('./public/js/user')
const prescricao = require('./public/js/prescricao')

app.set('port', (process.env.PORT || 3000))
app.use(expressLayouts)
app.set('view engine','ejs')

app.get('/', (req, res) => {
  res.render('tabela', { prescricoes: prescricao })
})
app.get('/tabela', (req, res) => {
    res.render('tabela-prescricao', { prescricoes: prescricao })
  })
app.get('/about', (req, res) => {
  res.render('about', { usuario: user })
})

app.use(express.static(__dirname + '/public/'))

app.listen(app.get('port'), () =>
  console.log("Servidor rodando na porta: " + app.get('port')))
