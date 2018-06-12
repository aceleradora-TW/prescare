module.exports = Cuidado => (req, res) => {
    return Cuidado.destroy({
        where: {
            id: req.params.cuidado_id
        }
    }).then(() => {
        res.redirect('/acolhido/' + req.params.acolhidoId + '/prescricao/' + req.params.prescricao_id + '/edit')
    })
}