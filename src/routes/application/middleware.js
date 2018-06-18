module.exports = () => (req, res, next) => {
  res.locals.loggedUser = req.user
  next();
}
