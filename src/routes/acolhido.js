const Sequelize = require('sequelize')

const acolhido = (Acolhido, Prescricao) => (req, res) => {
    return Acolhido.find({
        where: {
            id: req.params.acolhido_id
        },
        include: [Prescricao]
    }).then(acolhido => {
        res.render('pages/info', { acolhido: acolhido, presc: acolhido.prescricaos })
    })
}

module.exports = acolhido
