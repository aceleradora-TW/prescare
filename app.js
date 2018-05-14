const express = require('express')
const app = express()
const expressLayouts = require ('express-ejs-layouts')
const port = 3000

app.set('port', (process.env.PORT || 3000))

app.set('view engine','ejs')
app.use(expressLayouts)
app.get('/',(req,res)=>{
  res.render('home')
})
app.get('/about',(req,res)=>{
  const user = {
    name: 'Márcia',
    email: 'marcia@gmail.com',
    avatar: 'https://pbs.twimg.com/profile_images/715629565146767363/OjnVtVFN_400x400.jpg'
  }
  res.render('about', { usuario: user })
})
app.use(express.static(__dirname + '/public'))
app.listen(port)
console.log('Servidor iniciado em http://localhost:'+ port)
