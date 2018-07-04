module.exports = (Medicamento, Prescricao) => (req, res) => {
    return Prescricao.findOne({
        where: {
            id: req.params.prescricao_id
        }
    }).then(prescricao => {
        Medicamento.create({
            prescricao_id: prescricao.id
        }).then(medicamento => {
            prescricao.changed('updated_at', true)
            prescricao.save().then(_ => {
                res.redirect(req.originalUrl + "/" + medicamento.id + "/edit");
            })
        })
    })
}
