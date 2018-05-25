const acolhidos = (acolhido) => (req, res) => {
    return acolhido
        .find({
            where: { id: req.params.id }
        })
        .then(acolhidos => {    
            ////req.params.id //mostrar somente primeiro registro
            res.render('pages/info',  { acolhidos: acolhidos })
        })
        .catch(console.log)  
}

module.exports = acolhidos