module.exports = Prescricao => (req, res) => {
  Prescricao.findOne({
    where: {
      id: req.params.id
    }
  }).then(prescricao => {
    if (!prescricao) res.redirect('404')

    res.render('pages/prescricao', { prescricao })
  }).catch(err => console.log(err))  
}
