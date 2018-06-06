module.exports = Cuidado => (req, res) => {
<<<<<<< d1560f0516fbd3c191936b3fbaf66bee77306862
    return Cuidado
    .create({
=======
    Cuidado.create({
>>>>>>> :rocket: <@Claudiastrm, @DiovaneMendes> Adiciona CRUD cuidados #23
        prescricao_id: req.params.prescricao_id
    }).then(cuidado => {
        res.redirect(req.originalUrl + '/' + cuidado.id + '/edit')
    })
}
