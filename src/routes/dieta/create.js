module.exports = Dieta => (req, res) => {
    Dieta.create({
        prescricao_id: req.params.prescricao_id
    }).then(dieta => {
        res.redirect(req.originalUrl + '/' + dieta.id + '/edit')
    })
}
