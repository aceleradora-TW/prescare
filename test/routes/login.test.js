const login = require("../../src/routes/login")

describe('Quando acesso login', () => {
    it('Deve mostrar pagina com campos para inserir usuario e senha', () => {
        const req = {}
        const res = {render : jest.fn()}
        
        login()(req,res)
        
        expect(res.render).toBeCalledWith('pages/login', {layout: true})
    })
})