module.exports = Cuidado => (req, res) => {
    return Cuidado
        .findOne({
            where: {
                id: req.params.cuidado_id
            }
        }).then(cuidado => {
            res.render('pages/editarCuidado', {
                acolhidoId: req.params.acolhido_id,
                prescricaoId: req.params.prescricao_id,
                cuidado,
                updateUrl: req.originalUrl,
            })
        })
}