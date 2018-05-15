const express = require('express')
const app = express()
const ejs = require('ejs')
const expressLayouts = require ('express-ejs-layouts')
const routes = require('./src/routes/routes')

app.set('view engine','ejs')
app.use(expressLayouts)

app.set('port', (process.env.PORT || 3000))

app.get('/table', routes.table)

app.listen(app.get('port'), () =>
  console.log("Servidor rodando na porta: "+app.get('port')))

//continuar tutorial
//https://medium.com/@yoobi55/setting-up-heroku-server-with-node-js-express-eng-b0c8cc61a2a9
