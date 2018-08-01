module.exports = Prescricao => (req, res) => {
  return Prescricao.findOne({
    where: {
      id: req.params.id
    }
  }).then(prescricao => {
    if (!prescricao) {
      return res.render('pages/error')
    }

    res.render('pages/prescricao', { prescricao })
  })
}