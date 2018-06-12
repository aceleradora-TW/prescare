module.exports = Cuidado => (req, res) => {
    return Cuidado.destroy({
        where: {
            id: req.params.cuidadoId
        }
    }).then(() => {
        res.redirect('/acolhido/' + req.params.acolhidoId + '/prescricao/' + req.params.prescricaoId + '/edit')
    })
}