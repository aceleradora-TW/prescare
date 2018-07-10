const sequelize = require('sequelize')

module.exports = (Medicamento, Prescricao) => (req, res) => {
    return Medicamento
    .destroy({
        where: {
            id: req.params.medicamento_id
        }
    }).then(() => {
        res.redirect('/acolhido/' + req.params.acolhido_id + '/prescricao/' + req.params.prescricao_id + '/edit')
    }),
    Prescricao.update(
        { updated_at: sequelize.NOW },
        { where: {id: req.params.prescricao_id }}
    ).then(result => {
    })
    .catch((error) => {
        console.log(error.message);
    })
}