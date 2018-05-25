const acolhidoRoute = require("../../src/routes/acolhido")

describe('Quando acesso acolhido', () => {
    it('Deve mostrar pagina com prescrição e suas abas atualizaveis', (done) => {
        const acolhido = {
            find: jest.fn()
        }
       
        const req = {  where:  id = 1 }
        const res = { render: jest.fn() }
        const acolhidos = [{ nome: 'Leo' }, { id: '1' }, { idade: 'Luna' }, { peso: 'Luna' }, { alergias: 'Luna' }, { via_alimentacao: 'Luna' }]
        acolhido.find.mockResolvedValue(acolhidos)

        return acolhidoRoute(acolhido)(req, res)
        .then(() => expect(acolhido.find).toBeCalledWith(1))
        .then(() => expect(res.render).toBeCalledWith('pages/info', { acolhidos }))
            .then(done)
            .catch(done)

    }

    )
})