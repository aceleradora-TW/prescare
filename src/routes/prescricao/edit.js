module.exports = (Prescricao, Cuidado)  => (req, res) => {
  return Prescricao
    .findOne({
      where: {
        id: req.params.prescricao_id
      },
      include: [Cuidado]
    }).then(prescricao => {
      if (!prescricao) res.send('Essa página não existe')
      res.render('pages/editarPrescricao', { prescricao, cuid: prescricao.cuidados, updateUrl: req.originalUrl })
    })
}
