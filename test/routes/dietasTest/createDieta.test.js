
const createRoute = require('../../../src/routes/dieta/create')

describe('Quando crio dieta', () => {
  const prescricao = jest.mock()
  const Prescricao = { findOne: jest.fn().mockResolvedValue(prescricao)}

  const req = { params: { prescricao_id:1 } }
  const res = { render: jest.fn() }
  const next = jest.fn()

  it('Deve mostrar dieta na tela', () => {
    createRoute(Prescricao)(req, res)

    })
  })