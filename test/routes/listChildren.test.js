const listChildren = require("../../src/routes/listChildren")

describe('Quando acesso ListChildren', () => {
    it('Deve mostrar uma lista de nomes', (done) => {

        const acolhido = {
            findAll : jest.fn() 
        }

        const req = {}
        const res = {render : jest.fn()}
        const acolhidos = [{ nome: 'Leo' }]
        acolhido.findAll.mockResolvedValue(acolhidos)
        
        return listChildren(acolhido)(req,res)
        .then(() => expect(res.render).toBeCalledWith('pages/listChildren', { acolhidos }))
        .then(done)
        .catch(done)
    })
})