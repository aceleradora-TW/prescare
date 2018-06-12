const acolhidoRoutes = require("../../src/routes/acolhido/update")

describe('Quando acesso Acolhido', () => {
  it('Deve atualizar informações dos acolhidos', (done) => {

    const acolhido = {acolhidoId:1, update: jest.fn().mockResolvedValue() }
    const Acolhido = { findOne: jest.fn().mockResolvedValue(acolhido) }
    const req = {
      params: {
        acolhidoId: 1,
      },
      body: {
        idade: '20',
        peso: '150',
        alergias: "código",
        viaAlimentacao: "boca",
      }
    }
    
    const res = { redirect: jest.fn() }
  
    acolhidoRoutes(Acolhido)(req, res)
      .then(() => expect(Acolhido.findOne).toBeCalledWith( {'where': {'id': req.params.acolhidoId }}))
      .then(() => expect(acolhido.update).toBeCalledWith(req.body))
      .then(() => expect(res.redirect).toBeCalledWith('/acolhido/' + req.params.acolhidoId ))
      .then(done)
      .catch(done)
  })
})