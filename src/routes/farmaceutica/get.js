module.exports = Prescricao => (req, res) => {
  return Prescricao.findOne({
    where: {
      id: req.params.id
    }
  }).then(prescricao => {
    if (!prescricao) res.redirect('404')
    res.render('pages/farmaceutica', { prescricao })
  }).catch(err => console.log(err))
}