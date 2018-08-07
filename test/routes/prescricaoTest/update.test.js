
const updateRoute = require('./../../../src/routes/prescricao/update')

describe('Atualiza prescricao', () => {
  const prescricao = { update: jest.fn() }
  const Prescricao = { findOne: jest.fn().mockResolvedValue(prescricao) }
  
  const Medicamento = jest.mock()

  const req = { body: { validade: '11' }, params: { prescricao_id: 1, acolhido_id: 2 }, app: { locals: { parseData: jest.fn() } } }
  const res = { redirect: jest.fn() }
  const next = jest.fn()

  it('deve chamar update com os parametros certos', () => {
    updateRoute(Prescricao, Medicamento)(req, res, next)
      .then(() => expect(Prescricao.findOne).toHaveBeenCalledWith({ where: { id: req.params.prescricao_id }, include: [ Medicamento ] }))
      .then(() => expect(prescricao.update).toHaveBeenCalledWith({ validade: req.app.locals.parseData(req.body.validade) }))
      .then(() => expect(res.redirect).toHaveBeenCalledWith('/acolhido/' + req.params.acolhido_id + '/prescricao/' + req.params.prescricao_id + '/edit'))
  })

  it('deve chamar next quando prescricao não é encontrada', () => {
    Prescricao.findOne.mockResolvedValue(null)

    updateRoute(Prescricao, Medicamento)(req, res, next)
      .then(() => expect(next).toHaveBeenCalled())
  })
})
