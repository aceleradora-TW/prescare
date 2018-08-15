const cuidadoRoute = require('../../../src/routes/cuidado/destroy')

describe('Quando deleto cuidado', () => {
  it('Deve deletar informações dos cuidados', (done) => {
    const Cuidado = {
      destroy: jest.fn().mockResolvedValue()
    }
    
    const req = { params: { prescricao_id: 1, acolhido_id: 2, cuidado_id: 3 } }
    const res = { redirect: jest.fn() }
        
    cuidadoRoute(Cuidado)(req, res)
      .then(() => expect(Cuidado.destroy).toBeCalledWith({ where: { id: req.params.cuidado_id }} ))
      .then(() => expect(res.redirect).toBeCalledWith('/acolhido/2/prescricao/1/edit'))
      .then(done)
      .catch(done)
  })
})
