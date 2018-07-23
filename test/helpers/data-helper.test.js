const { formatarData, parseData } = require('./../../src/helpers/data-helper')
const moment = require('moment')

describe('Data Helper', () => {
  describe('formatarData', () => {
    it('Deve formatar uma data para DD/MM/YYYY', () => {
      expect(formatarData(moment('05/17/2018', 'MM/DD/YYYY'))).toEqual('17/05/2018')
    })

    it('deve formatar data com formatos customizaveis', () => {
      expect(formatarData(moment('05/07/2018', 'DD/MM/YYYY'), 'YYYY/MM/DD')).toEqual('2018/07/05')
    })
  })

  describe('parseData', () => {
    const data = '17/05/2012'
    expect(parseData(data)).toEqual(moment(data, 'DD/MM/YYYY'))
  })
})
