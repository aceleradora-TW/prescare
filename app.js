const express = require('express')
const app = express()
const ejs = require('ejs')
const expressLayouts = require('express-ejs-layouts')

app.set('port', (process.env.PORT || 3000))
app.set('view engine', 'ejs')



app.get('/', (req, res) => {
  res.send('Bye Aceleradora!!!')
})

app.get('/info', (req, res) => {
  res.render('pages/info')
})

app.listen(app.get('port'), () =>
  console.log("Servidor rodando na porta: "+app.get('port')))

//continuar tutorial
//https://medium.com/@yoobi55/setting-up-heroku-server-with-node-js-express-eng-b0c8cc61a2a9