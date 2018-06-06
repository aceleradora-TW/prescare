module.exports = Cuidado => (req, res) => {
<<<<<<< d1560f0516fbd3c191936b3fbaf66bee77306862
    return Cuidado
    .findOne({
=======
    Cuidado.findOne({
>>>>>>> :rocket: <@Claudiastrm, @DiovaneMendes> Adiciona CRUD cuidados #23
        where: {
            id: req.params.cuidado_id
        }
    }).then(cuidado => {
        res.render('pages/editarCuidado', { cuidado, updateUrl: req.originalUrl })
    })
}
