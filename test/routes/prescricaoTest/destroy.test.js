const destroyRoute = require('./../../../src/routes/prescricao/destroy')

describe('Destroi prescricao', () => {
  const Prescricao = { destroy: jest.fn().mockResolvedValue(jest.fn()) }

  const req = { params: { prescricao_id: 1, acolhido_id: 2 } }
  const res = { redirect: jest.fn() }

  it('Deve chamar destroy com os parametros certos e redirecionar', () => {
    destroyRoute(Prescricao)(req, res)
      .then(() => expect(Prescricao.destroy).toHaveBeenCalledWith({ where: { id: req.params.prescricao_id } }))
      .then(() => expect(res.redirect).toHaveBeenCalledWith('/acolhido/' + req.params.acolhido_id))
  })
})
