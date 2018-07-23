module.exports = () => (req, res) => {
  res.render('pages/login', { message: req.flash('error') })
}
