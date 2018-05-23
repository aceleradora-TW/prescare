const listChildren = require("../../src/routes/listChildren")

describe('Quando acesso ListChildren', () => {
    it('Deve mostrar uma lista de nomes', () => {
        const req = {}
        const res = {render : jest.fn()}
        const users = [{ nome: 'Leo' }, { nome: 'Luna' } ]
        
        listChildren(users)(req,res)
        
        expect(res.render).toBeCalledWith('pages/listChildren', { users } )
    })
})