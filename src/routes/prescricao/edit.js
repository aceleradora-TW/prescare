module.exports = (Prescricao, Cuidado)  => (req, res) => {
  return Prescricao
    .findOne({
      where: {
        id: req.params.prescricao_id
      },
      include: [Cuidado]
    }).then(prescricao => {
      if (!prescricao) {
        return res.send('Essa página não existe')
      }
      res.render('pages/editarPrescricao', { prescricao, cuidados: prescricao.cuidados, updateUrl: req.originalUrl })
    })
}
