const NOT_FOUND = 404
module.exports = () => (req, res) => {
  res.status(NOT_FOUND)
  res.render('pages/notFound')
}
