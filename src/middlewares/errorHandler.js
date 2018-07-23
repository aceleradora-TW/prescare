module.exports = (logger) => (error, req, res) => {
  logger(error.message)
  res.render('pages/internalError', {error})
}
