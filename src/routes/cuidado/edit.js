module.exports = Cuidado => (req, res) => {
    return Cuidado
    .findOne({
        where: {
            id: req.params.cuidado_id
        }
    }).then(cuidado => {
        if(!cuidado) res.send('Essa página não existe')
        res.render('pages/editarCuidado', { 
            acolhidoId: req.params.acolhidoId,
            prescricaoId: req.params.prescricao_id,
            cuidado,
            updateUrl: req.originalUrl 
        })
    })
}