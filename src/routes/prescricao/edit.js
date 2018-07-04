module.exports = (Prescricao, Cuidado, Dieta, Medicamento, Acolhido) => (req, res) => {
  return Prescricao.findOne({
    where: {
      id: req.params.prescricao_id
    },
    include: [Cuidado, Dieta, Medicamento, Acolhido]
  })
    .then(prescricao => {
      if (!prescricao) {
        return res.render('pages/error')
      }

      let tipoDoUsuario = req.user.tipo

      if (tipoDoUsuario === 'clinica') {
        res.render('pages/editarPrescricao', {
          prescricao,
          dietas: prescricao.dieta,
          cuidados: prescricao.cuidados,
          medicamentos: prescricao.medicamentos,
          updateUrl: req.originalUrl,
          acolhido: prescricao.acolhido,
          acolhidoId: req.params.acolhido_id,
        })
      }
      if (tipoDoUsuario === 'neurologista') {
        res.render('pages/editarPrescricao', {
          prescricao,
          dietas: prescricao.dieta,
          cuidados: prescricao.cuidados,
          medicamentos: prescricao.medicamentos,
          updateUrl: req.originalUrl,
          acolhido: prescricao.acolhido,
          acolhidoId: req.params.acolhido_id,
          tipoDoUsuario: req.user.tipo
        })
      }

      if (tipoDoUsuario === 'farmaceutica') {
        res.render('pages/farmaceutica/editarPrescricaoFarmaceutica')
      }
    })
}