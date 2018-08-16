const moment = require('moment')

const formatoData = 'DD/MM/YYYY'

const formatarData = ({ data, formato = 'DD/MM/YYYY', fallback = '' }) => data ? moment(data).format(formato) : fallback
const converterData = data => moment(data, formatoData)


module.exports = app => (req, res, next) => {
  app.locals.formatarData = formatarData
  app.locals.converterData = converterData
  next()
}
