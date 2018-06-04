const acolhido = (acolhido) => (req, res) => {
    return acolhido
        .findOne({
            where: { id: req.params.acolhido_id }
        })
        .then(acolhido => {    
            res.render('pages/info',  { acolhido })
        })
        .catch(console.log)  
}

module.exports = acolhido