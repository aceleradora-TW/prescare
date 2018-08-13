const createRoute = require('../../../src/routes/medicamento/create')

describe('Renderiza página de criar medicamento', () => {
  const prescricao = jest.mock()
  const Prescricao = { findOne: jest.fn().mockResolvedValue(prescricao) }
  const Acolhido = jest.mock()

  const req = { params: { acolhido_id: 1, prescricao_id: 1 } }
  const res = { render: jest.fn() }
  const next = jest.fn()

  it('deve chamar createRoute com os parametros certos', () => {
    createRoute(Prescricao, Acolhido)(req, res, next)
      .then(() =>
        expect(Prescricao.findOne).toHaveBeenCalledWith({
          where: { id: req.params.prescricao_id },
          include: [{ model: Acolhido, required: true }]
        })
      )
      .then(() =>
        expect(res.render).toHaveBeenCalledWith('pages/novoMedicamento', {
          medicamento: {},
          prescricao: prescricao
        })
      )
  })

  it('deve chamar next quando rota não é encontrada', done => {
    Prescricao.findOne.mockResolvedValue(null)

    createRoute(Prescricao, Acolhido)(req, res, next)
      .then(() => expect(next).toHaveBeenCalled())
      .then(done)
      .catch(done)
  })
})
