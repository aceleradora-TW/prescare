module.exports = Cuidado => (req, res, next) => {
    return Cuidado
        .create({
            prescricao_id: req.params.prescricao_id
        }).then(cuidado => {
            res.redirect(req.originalUrl + '/' + cuidado.id + '/edit')
            next()
        })
}