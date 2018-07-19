const acolhidoRoute = require('../../../src/routes/acolhido/destroy')

describe('Quando deleto acolhido', () => {
  it('Deve excluir informações do acolhido', (done) => {
    const Acolhido = {
      destroy: jest.fn().mockResolvedValue()
    }

    const req = { params: { acolhido_id: 2 } }
    const res = { redirect: jest.fn() }

    acolhidoRoute(Acolhido)(req, res)
      .then(() => expect(Acolhido.destroy).toBeCalledWith({'where': { 'id': req.params.acolhido_id }}))
      .then(() => expect(res.redirect).toBeCalledWith('/lista-acolhidos'))
      .then(done)
      .catch(done)
  })
})