const express = require('express')
const app = express()

app.set('port', (process.env.PORT || 3000))

app.get('/', (req, res) => {
    res.send('Ola')
})

app.listen(app.get('port'),() =>
    console.log("Servidor rodando na porta: " + app.get('port')))
