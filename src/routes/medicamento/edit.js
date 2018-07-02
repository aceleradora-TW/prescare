module.exports = (Medicamento, Prescricao, Acolhido) => (req, res) => {
  return Medicamento
    .findOne({
      where: {
        id: req.params.medicamento_id
      },
      include: [
        {
          model: Prescricao, where: { id: req.params.prescricao_id },
          include: [{ model: Acolhido, where: { id: req.params.acolhido_id } }]
        }
      ]
    }).then(medicamento => {

      if (!medicamento) {
        return res.render('pages/error')
      }

      let tipoDoUsuario = req.user.tipo

      if (tipoDoUsuario === 'medica') {
        res.render('pages/editarMedicamento', {
          acolhidoId: req.params.acolhido_id,
          prescricaoId: req.params.prescricao_id,
          medicamento,
          updateUrl: req.originalUrl,
          acolhido: medicamento.prescricao.acolhido
        })
      }
      if (tipoDoUsuario === 'farmaceutica') {
        res.render('pages/farmaceutica/editarMedicamentoFarmaceutica', {
          acolhidoId: req.params.acolhido_id,
          prescricaoId: req.params.prescricao_id,
          medicamento,
          updateUrl: req.originalUrl,
          acolhido: medicamento.prescricao.acolhido
        })
      }

    })
}