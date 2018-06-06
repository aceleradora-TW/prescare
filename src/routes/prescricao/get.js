module.exports = Prescricao => (req, res) => {
  Prescricao.findOne({
    where: {
      id: req.params.id
    }
  }).then(prescricao => {
 

    res.render('pages/prescricao', { prescricao })
  }).catch(err => console.log(err))  
}
