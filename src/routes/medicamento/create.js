module.exports = Medicamento => (req, res, next) => {
    return Medicamento
    .create({
        prescricao_id: req.params.prescricao_id
    }).then(medicamento => {
        res.redirect(req.originalUrl + '/' + medicamento.id + '/edit')
        next()
    })
}
