const listaAcolhidos = require("../../src/routes/acolhido/list")

describe('Quando acesso listaAcolhidos', () => {
    it('Deve mostrar uma lista de nomes', (done) => {

        const acolhido = {
            findAll : jest.fn()
        }

        const req = {}
        const res = {render : jest.fn()}
        const acolhidos = [{ nome: 'Leo' }]
        acolhido.findAll.mockResolvedValue(acolhidos)

        listaAcolhidos(acolhido)(req,res)
        .then(() => expect(res.render).toBeCalledWith('pages/listaAcolhidos', { acolhidos }))
        .then(done)
        .catch(done)
    })
})
