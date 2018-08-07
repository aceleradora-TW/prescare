const printRoute = require('./../../../src/routes/prescricao/print')

describe('Imprime prescrição', () => {
  const prescricao = { acolhido: jest.mock() }
  const Prescricao = { findOne: jest.fn().mockResolvedValue(prescricao) }

  const Cuidado = jest.mock(), Dieta = jest.mock(), Medicamento = jest.mock(), Acolhido = jest.mock()

  const req = { params: { prescricao_id: 1 } }
  const res = { render: jest.fn() } 

  it('Deve renderizar a página de impressão com os parametros certos', () => {
    printRoute(Prescricao, Cuidado, Dieta, Medicamento, Acolhido)(req, res)
      .then(() => expect(Prescricao.findOne).toHaveBeenCalledWith(
        { 
          where: { id: req.params.prescricao_id }, 
          include: [ Cuidado, Dieta, Medicamento, Acolhido ] 
        })
      )
      .then(() => expect(res.render).toHaveBeenCalledWith('pages/impressao', { prescricao }))
  })
})
