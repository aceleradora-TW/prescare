module.exports = (logger) => (error, req, res, next) => {
  if (error) {
    logger.error(error.message)
    return res.render('pages/internalError', {error})
  }

  return next()
}
