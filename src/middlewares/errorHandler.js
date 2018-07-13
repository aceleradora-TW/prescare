const {callAll} = require('../utils');

// eslint-disable-next-line
module.exports = (logger) => (error, req, res, next) => error
  ? callAll(
    () => logger(error.message),
    () => res.render('pages/error'))

  : callAll(
    () => res.render('pages/error'));
