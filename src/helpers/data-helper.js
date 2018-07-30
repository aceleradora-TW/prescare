const moment = require('moment')

const formatoData = 'DD/MM/YYYY'
const defaultFallback = ''

const formatarData = options => options.data ? moment(options.data).format(options.formato || formatoData) : (options.fallback || defaultFallback)
const parseData = data => moment(data, formatoData)

module.exports = {
  formatarData,
  parseData
}
