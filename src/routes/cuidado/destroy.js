module.exports = Cuidado => (req, res, next) => {
    return Cuidado
        .destroy({
            where: {
                id: req.params.cuidado_id
            }
        }).then(() => {
            res.redirect('/acolhido/' + req.params.acolhido_id + '/prescricao/' + req.params.prescricao_id + '/edit')
            next()
        })
}