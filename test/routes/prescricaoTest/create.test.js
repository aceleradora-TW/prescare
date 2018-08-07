const createRoute = require('./../../../src/routes/prescricao/create')

describe('Criar Prescrição', () => {
  const acolhido = jest.mock()
  const Acolhido = { findOne: jest.fn().mockResolvedValue(acolhido) }

  const req = { params: { acolhido_id: 1 } }
  const res = { render: jest.fn() }
  const next = jest.fn()

  it('deve renderizar novaPrescricao com acolhido', () => {
    createRoute(Acolhido)(req, res, next)
      .then(() => expect(Acolhido.findOne).toHaveBeenCalledWith(
        { 
          where: { id: req.params.acolhido_id } 
        })
      )
      .then(() => expect(res.render).toHaveBeenCalledWith('pages/novaPrescricao', { acolhido }))
  })

  it('deve chamar funcão next quando acolhido não é encontrado e não chamar render', done => {
    res.render.mockClear()

    Acolhido.findOne.mockResolvedValue(null)
    
    createRoute(Acolhido)(req, res, next)
      .then(() => expect(next).toHaveBeenCalled())
      .then(() => expect(res.render).not.toHaveBeenCalled())
      .then(done)
      .catch(done)
  })
})
