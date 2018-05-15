const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')
const prescricao = require('./public/js/prescricao')
const user = require('./public/js/user')
const port = 3000



app.set('port', (process.env.PORT || 3000))
app.use(expressLayouts)
app.set('view engine','ejs')

app.get('/', (req, res) => {
  res.render('home')
})
app.get('/tabela', (req, res) => {
    res.render('tabela-prescricao', { prescricoes: prescricao })
  })
app.get('/about', (req, res) => {
  res.render('about', { usuario: user })
})

app.use(express.static(__dirname + '/public/'))

app.listen(port)
console.log('Servidor iniciado em http://localhost:' + port)
