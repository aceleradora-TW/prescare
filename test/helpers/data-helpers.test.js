const moment = require('moment')
const dataHelpers = require('./../../src/helpers/data-helpers')

describe('Data Helper', () => {
  const app = { locals: {} }

  describe('formatarData', () => {
    const req = {}
    const res = {}
    const next = jest.fn()
    
    dataHelpers(app)(req, res, next)

    it('Deve formatar uma data para DD/MM/YYYY', () => {
      expect(app.locals.formatarData({ data: moment('05/17/2018', 'MM/DD/YYYY') })).toEqual('17/05/2018')
    })

    it('deve formatar data com formatos customizaveis', () => {
      expect(app.locals.formatarData({ data: moment('05/07/2018', 'DD/MM/YYYY'), formato: 'YYYY/MM/DD'} )).toEqual('2018/07/05')
    })

    it('deve usar fallback quando data é nula', () => {
      expect(app.locals.formatarData({ data: null, fallback: '-'})).toEqual('-')
    })

    it('deve ter fallback padrão quando nao existir diferente', () => {
      expect(app.locals.formatarData({ data: null })).toEqual('')
    })
  })

  describe('converterData', () => {
    const data = '17/05/2012'
    expect(app.locals.converterData(data)).toEqual(moment(data, 'DD/MM/YYYY'))
  })
})
