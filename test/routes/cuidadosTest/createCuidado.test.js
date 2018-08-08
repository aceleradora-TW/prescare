
const createRoute = require('../../../src/routes/cuidado/create')

describe('Quando crio cuidado', () => {
  const prescricao = jest.mock()
  const Prescricao = { findOne: jest.fn().mockResolvedValue(prescricao)}

  const req = { params: { prescricao_id:1 } }
  const res = { render: jest.fn() }
  const next = jest.fn()

  it('Deve mostrar cuidado na tela', () => {
    createRoute(Prescricao)(req, res)

    })
  })