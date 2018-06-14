module.exports = (Cuidado, Prescricao, Acolhido) => (req, res) => {
    return Cuidado
        .findOne({
            where: {
                id: req.params.cuidado_id
            },
            include: [{
                model: Prescricao, where: {
                    id: req.params.prescricao_id
                }, include: [{
                    model: Acolhido, where: {
                        id: req.params.acolhido_id
                    }
                }]
            }]
        }).then(cuidado => {
            if (!cuidado) res.send('Essa página não existe')
            res.render('pages/editarCuidado', {
                acolhido_id: req.params.acolhido_id,
                prescricao_id: req.params.prescricao_id,
                cuidado,
                updateUrl: req.originalUrl,
                acolhido: cuidado.prescricao.acolhido
            })
        })
}
