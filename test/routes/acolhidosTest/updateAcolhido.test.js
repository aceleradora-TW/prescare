const acolhidoRoutes = require("../../../src/routes/acolhido/update")

describe('Quando acesso Acolhido', () => {
  it('Deve atualizar informações dos acolhidos', (done) => {

    const acolhido = {acolhido_id:1, update: jest.fn().mockResolvedValue() }
    const Acolhido = { findOne: jest.fn().mockResolvedValue(acolhido) }
    const req = {
      params: {
        acolhido_id: 1,
      },
      body: {
        nascimento: '20',
        peso: '150',
        alergias: "código",
        viaAlimentacao: "boca",
      }
    }
    
    const res = { redirect: jest.fn() }
  
    acolhidoRoutes(Acolhido)(req, res)
      .then(() => expect(Acolhido.findOne).toBeCalledWith( {'where': {'id': req.params.acolhido_id }}))
      .then(() => expect(acolhido.update).toBeCalledWith(req.body))
      .then(() => expect(res.redirect).toBeCalledWith('/acolhido/' + req.params.acolhido_id ))
      .then(done)
      .catch(done)
  })
})