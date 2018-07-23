const INTERNAL_SERVER_ERROR = 500

module.exports = (logger) => (error, req, res, next) => {
  if (error) {
    logger.error(error.message)
    res.status(INTERNAL_SERVER_ERROR)
    return res.render('pages/internalError', {error})
  }

  return next()
}
