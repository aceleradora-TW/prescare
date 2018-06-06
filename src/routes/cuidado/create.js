module.exports = Cuidado => (req, res) => {
    Cuidado.create({
        prescricao_id: req.params.prescricao_id
    }).then(cuidado => {
        res.redirect(req.originalUrl + '/' + cuidado.id + '/edit')
    })
}