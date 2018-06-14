module.exports = Cuidado => (req, res) => {
    return Cuidado
    .findOne({
        where: {
            id: req.params.cuidado_id
        }
    }).then(cuidado => {
        res.render('pages/editarCuidado', { 
            acolhido_id: req.params.acolhido_id,
            prescricao_id: req.params.prescricao_id,
            cuidado,
            updateUrl: req.originalUrl 
        })
    })
}