const moment = require('moment')

const formatoData = 'DD/MM/YYYY'

const formatarData = ({ data, formato = 'DD/MM/YYYY', fallback = '' }) => data ? moment(data).format(formato) : fallback
const parseData = data => moment(data, formatoData)

module.exports = app => (req, res, next) => {
  app.locals.formatarData = formatarData
  app.locals.parseData = parseData
  next()
}
