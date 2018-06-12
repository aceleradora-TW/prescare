module.exports = Medicamento => (req, res) => {
    return Medicamento
    .create({
        prescricaoId: req.params.prescricaoId
    }).then(medicamento => {
        res.redirect(req.originalUrl + '/' + medicamento.id + '/edit')
    })
}