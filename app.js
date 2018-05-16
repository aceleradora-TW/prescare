const express = require('express')
const app = express()
const expressLayouts = require ('express-ejs-layouts')
const ejs = require('ejs')

const prescricao = require('./public/js/prescricao')
const user = require('./public/js/user')

const PORT = process.env.PORT || 3000

app.use(expressLayouts)
app.set('view engine','ejs')

app.get('/', (req, res) => {
  res.render('pages/home')
})
app.get('/tabela-prescricao', (req, res) => {
  res.render('pages/tabela-prescricao', { prescricoes: prescricao })
})
app.get('/about', (req, res) => {
  res.render('pages/about', { usuario: user })
})

app.use(express.static(__dirname + '/public/'))

app.listen(PORT, () => console.log('Rodando na porta ' + PORT))
