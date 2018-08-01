const acolhidoRoute = require('../../../src/routes/acolhido/create')

describe('Quando acesso novo acolhido', () => {
  it('Deve criar novo acolhido e abrir página de edição', (done) => {
    const Acolhido = {
      create: jest.fn()  
    }
    const req = {
      body: {
        nome: 'Abelardo',
        nascimento: '01/01/2001',
        peso: '70',
        alergias: 'pólen',
        via_alimentacao: 'oral'
      }
    }
    const res = { redirect: jest.fn() }
    const acolhido = { id: 3 }
    Acolhido.create.mockResolvedValue(acolhido)

    acolhidoRoute(Acolhido)(req, res)
      .then(() => expect(Acolhido.create))
      .then(() => expect(res.redirect).toBeCalledWith('/acolhido/3'))
      .then(done)
      .catch(done)
  })
})