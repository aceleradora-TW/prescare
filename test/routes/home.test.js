const home = require("../../src/routes/home")

describe('Quando acesso home', () => {
    it('Deve mostrar a pagina inicial', () => {
        const req = {}
        const res = {render : jest.fn()}
        
        home()(req,res)
        
        expect(res.render).toBeCalledWith('pages/home')
    })
})