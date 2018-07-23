module.exports = (logger) => (error, req, res) => {
  logger.error(error.message)
  res.render('pages/internalError', {error})
}
