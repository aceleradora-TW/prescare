
const createRoute = require('../../../src/routes/medicamento/create')

describe('Quando crio medicamento', () => {
  const prescricao = jest.mock()
  const Prescricao = { findOne: jest.fn().mockResolvedValue(prescricao)}

  const req = { params: { prescricao_id:1 } }
  const res = { render: jest.fn() }
  const next = jest.fn()

  it('Deve mostrar medicamento na tela', () => {
    createRoute(Prescricao)(req, res)

    })
  })