module.exports = Prescricao => (req, res) => {
  return Prescricao.findOne({
    where: {
      id: req.params.id
    }
  }).then(prescricao => {
    if (!prescricao) res.send('Essa página não existe')
    res.render('pages/prescricao', { prescricao })
  }).catch(err => console.log(err))
}
