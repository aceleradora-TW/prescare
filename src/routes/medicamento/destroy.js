module.exports = Cuidado => (req, res) => {
    return Medicamento
    .destroy({
        where: {
            id: req.params.medicamento_id
        }
    }).then(() => {
        res.redirect('/acolhido/' + req.params.acolhido_id + '/prescricao/' + req.params.prescricao_id + '/edit')
    })
}