module.exports = () => (req, res) => {
  req.logout()
  req.session.destroy(() => res.redirect('/login'))
}