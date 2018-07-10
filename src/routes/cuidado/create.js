const sequelize = require('sequelize')

module.exports = (Cuidado, Prescricao) => (req, res) => {
    return Cuidado
    .create({
        prescricao_id: req.params.prescricao_id
    }).then(cuidado => {
        res.redirect(req.originalUrl + '/' + cuidado.id + '/edit')
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