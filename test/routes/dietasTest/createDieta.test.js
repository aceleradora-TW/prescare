const createRoute = require('../../../src/routes/dieta/create')

describe('Renderiza rota de criar dieta', () => {
  const prescricao = jest.mock()
  const Prescricao = { findOne: jest.fn().mockResolvedValue(prescricao) }
  const Acolhido = jest.mock()

  const req = { params: { acolhido_id: 1, prescricao_id: 1 } }
  const res = { render: jest.fn() }
  const next = jest.fn()

  it('deve renderizar a página com os parametros certos', () => {
    createRoute(Prescricao, Acolhido)(req, res, next)
      .then(() =>
        expect(Prescricao.findOne).toHaveBeenCalledWith({
          where: { id: req.params.prescricao_id },
          include: [{ model: Acolhido, required: true }]
        })
      )
      .then(() =>
        expect(res.render).toHaveBeenCalledWith('pages/novaDieta', {
          dieta: {},
          prescricao,
          acolhido: prescricao.acolhido
        })
      )
  })

  it('deve chamar next quando prescricao não é encontrada', done => {
    res.render.mockReset()

    Prescricao.findOne.mockResolvedValue(null)

    createRoute(Prescricao, Acolhido)(req, res, next)
      .then(() => expect(next).toHaveBeenCalled())
      .then(() => expect(res.render).not.toHaveBeenCalled())
      .then(done)
      .catch(done)
  })
})
