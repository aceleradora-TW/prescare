const express = require('express')
const app = express()
const expressLayouts = require ('express-ejs-layouts')
const ejs = require('ejs')
const prescricao = require('./public/js/prescricao')
const user = require('./public/js/user')


app.set('PORT', (process.env.PORT || 3000))
app.use(expressLayouts)
app.set('view engine','ejs')

app.get('/', (req, res) => {
  res.render('pages/home', { prescricoes: prescricao })
})
app.get('/tabela-prescricao', (req, res) => {
    res.render('pages/tabela-prescricao', { prescricoes: prescricao })
})
app.get('/tabela', (req, res) => {
    res.render('tabela-prescricao', { prescricoes: prescricao })
  })
app.get('/about', (req, res) => {
  res.render('pages/about', { usuario: user })
})

app.use(express.static(__dirname + '/public/'))

app.listen(app.get('PORT'), () =>
  console.log("Servidor rodando na porta: " + app.get('PORT')))
