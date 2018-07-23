const moment = require('moment')

const formatoData = 'DD/MM/YYYY'

const formatarData = (data, formato = formatoData) => moment(data).format(formato)
const parseData = data => moment(data, formatoData)

module.exports = {
  formatarData,
  parseData
}
