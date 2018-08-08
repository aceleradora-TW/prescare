
const createRoute = require('../../../src/routes/medicamento/create')

describe('Quando crio medicamento', () => {
  const medicamento = jest.mock()
  const Medicamento = { findOne: jest.fn().mockResolvedValue(medicamento)}

  const req = { params: { medicamento_id:1 } }
  const res = { render: jest.fn() }
  const next = jest.fn()

  it('Deve mostrar medicamento na tela', () => {
    createRoute(Medicamento)(req, res)
      .then(() => expect(medicamento.findOne).toHaveBeenCalledWith(
        {
          where: { id: req.params.medicamento_id }
        })
      )
      .then(() => expect(res.render).toHaveBeenCalledWith('pages/novoMedicamento', { medicamento }))
    })
  })