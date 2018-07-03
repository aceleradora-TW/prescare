const acolhidoRoute = require('../../../src/routes/acolhido/create')

describe('Quando acesso novo acolhido', () => {
  it('Deve criar novo acolhido e abrir página de edição', (done) => {
    const Acolhido = {
      create: jest.fn()  
    }
    const req = { }
    const res = { render: jest.fn() }
    const acolhido = { id: 3 }
    Acolhido.create.mockResolvedValue(acolhido)

    acolhidoRoute(Acolhido)(req, res)
    .then(() => expect(Acolhido.create))
    .then(() => expect(res.render).toBeCalledWith('pages/novoAcolhido', { acolhido, updateUrl: '/acolhido/3/edit' }))
    .then(done)
    .catch(done)
  })
})

