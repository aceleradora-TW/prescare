
const createRoute = require('../../../src/routes/dieta/create')

describe('Quando crio medicamento', () => {
  const dieta = jest.mock()
  const Dieta = { findOne: jest.fn().mockResolvedValue(dieta)}

  const req = { params: { dieta_id:1 } }
  const res = { render: jest.fn() }
  const next = jest.fn()

  it('Deve mostrar dieta na tela', () => {
    createRoute(Dieta)(req, res)
      .then(() => expect(dieta.findOne).toHaveBeenCalledWith(
        {
          where: { id: req.params.dieta_id }
        })
      )
      .then(() => expect(res.render).toHaveBeenCalledWith('pages/novaDieta', { dieta }))
    })
  })