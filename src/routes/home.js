module.exports = () => (req, res) => {
  res.render('pages/home', { user: req.user })
}
