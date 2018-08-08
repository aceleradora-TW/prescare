
const createRoute = require('../../../src/routes/cuidado/create')

describe('Quando crio cuidado', () => {
  const cuidado = jest.mock()
  const Cuidado = { findOne: jest.fn().mockResolvedValue(cuidado)}

  const req = { params: { cuidado_id:1 } }
  const res = { render: jest.fn() }
  const next = jest.fn()

  it('Deve mostrar cuidado na tela', () => {
    createRoute(Cuidado)(req, res, next)
      .then(() => expect(cuidado.findOne).toHaveBeenCalledWith(
        {
          where: { id: req.params.cuidado_id }
        })
      )
      .then(() => expect(res.render).toHaveBeenCalledWith('pages/novoCuidado', { cuidado }))
    })

  it('deve chamar funcão next quando cuidado não é encontrado e não chamar render', done => {
    res.render.mockClear()

    Cuidado.findOne.mockResolvedValue(null)
    
    createRoute(Cuidado)(req, res, next)
      .then(() => expect(res.render).toHaveBeenCalled())
      .then(done)
      .catch(done)
  })
})