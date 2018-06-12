module.exports = Cuidado => (req, res) => {
    return Cuidado
    .findOne({
        where: {
            id: req.params.cuidadoId
        }
    }).then(cuidado => {
        if(!cuidado) res.send('Essa página não existe')
        res.render('pages/editarCuidado', { 
            acolhidoId: req.params.acolhidoId,
            prescricaoId: req.params.prescricaoId,
            cuidado,
            updateUrl: req.originalUrl 
        })
    })
}