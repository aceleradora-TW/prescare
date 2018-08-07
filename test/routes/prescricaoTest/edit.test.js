const editRoute = require('./../../../src/routes/prescricao/edit')

describe('Edita prescrição', () => {
  const prescricao = { acolhido: jest.mock() }
  const Prescricao = { findOne: jest.fn().mockResolvedValue(prescricao) }

  const Cuidado = jest.mock(), Dieta = jest.mock(), Medicamento = jest.mock(), Acolhido = jest.mock()

  const req = { params: { prescricao_id: 1 }, originalUrl: 'fooBarBaz' }
  const res = { render: jest.fn() }
  const next = jest.fn()

  it('Deve renderizar editar prescrição com os parametros certos', () => {
    editRoute(Prescricao, Cuidado, Dieta, Medicamento, Acolhido)(req, res, next)
      .then(() => expect(Prescricao.findOne).toHaveBeenCalledWith({ where: { id: req.params.prescricao_id }, include: [ Cuidado, Dieta, Medicamento, Acolhido ] }))
      .then(() => expect(res.render).toHaveBeenCalledWith('pages/editarPrescricao', { prescricao, acolhido: prescricao.acolhido, updateUrl: req.originalUrl }))
  })

  it('Deve chamar funcão next quando prescricao não é encontrada', () => {
    Prescricao.findOne.mockResolvedValue(null)
    
    editRoute(Prescricao, Cuidado, Dieta, Medicamento, Acolhido)(req, res, next)
      .then(() => expect(next).toHaveBeenCalled())
  })
})
