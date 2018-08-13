const createRoute = require('../../../src/routes/cuidado/create')

describe('Página para criar novo cuidado', () => {
  const prescricao = jest.mock()
  const Prescricao = { findOne: jest.fn().mockResolvedValue(prescricao) }
  const Acolhido = jest.mock()

  const req = { params: { acolhido_id: 1, prescricao_id: 1 } }
  const res = { render: jest.fn() }
  const next = jest.fn()

  it('deve chamar createCuidado com os parametros corretos', () => {
    createRoute(Prescricao, Acolhido)(req, res, next)
      .then(() =>
        expect(Prescricao.findOne).toHaveBeenCalledWith({
          where: { id: req.params.prescricao_id },
          include: [{ model: Acolhido, required: true }]
        })
      )
      .then(() =>
        expect(res.render).toHaveBeenCalledWith('pages/novoCuidado', { cuidado: {}, prescricao, acolhido: prescricao.acolhido })
      )
  })

  it('deve chamar next quando prescrição não é encontrada', done => {
    res.render.mockReset()

    Prescricao.findOne.mockResolvedValue(null)

    createRoute(Prescricao, Acolhido)(req, res, next)
      .then(() => expect(next).toHaveBeenCalled())
      .then(() => expect(res.render).not.toHaveBeenCalled())
      .then(done)
      .catch(done)
  })
})
