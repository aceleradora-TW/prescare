module.exports = Cuidado => (req, res) => {
    return Cuidado
    .create({
        prescricao_id: req.params.prescricao_id
    }).then(cuidado => {
        res.redirect(req.originalUrl + '/' + cuidado.id + '/edit')
    })
}
