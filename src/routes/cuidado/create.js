module.exports = Cuidado => (req, res) => {
    return Cuidado
    .create({
        prescricaoId: req.params.prescricaoId
    }).then(cuidado => {
        res.redirect(req.originalUrl + '/' + cuidado.id + '/edit')
    })
}