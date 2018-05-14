const express = require('express')
const home = require('./src/home')
const app = express()

app.set('port', (process.env.PORT || 3000))

app.get('/', home)

app.listen(app.get('port'), () =>
  console.log("Servidor rodando na porta: "+app.get('port')))

//continuar tutorial
//https://medium.com/@yoobi55/setting-up-heroku-server-with-node-js-express-eng-b0c8cc61a2a9
