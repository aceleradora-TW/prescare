const acolhido = (acolhido) => (req, res) => {
    return acolhido
        .findOne({
            where: { id: req.params.acolhido_id }
        })
<<<<<<< 2017f0f3ca357fa4666226ff6ac11f3c8e2e8577
        .then(acolhido => {
            res.render('pages/acolhido',  { acolhido })
        })
        .catch(console.log)
}

module.exports = acolhido
=======
        .then(acolhido => {    
            res.render('pages/acolhido',  { acolhido })
        })
        .catch(console.log)  
}

module.exports = acolhido
>>>>>>> :construction: <@marcos012, @ClaudiaStrm> refaz rotas da tela medicamento
