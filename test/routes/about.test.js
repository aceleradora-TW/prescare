const about = require("../../src/routes/about")

describe('Quando acesso about', () => {
    it('Deve mostrar pagina com informacoes', () => {
        const req = {}
        const res = {render : jest.fn()}
        const usuario = [{ nome: 'Leo' ,  email: 'Luna@bol.com', avatar: 'img' } ]
        
        about(usuario)(req,res)
        
        expect(res.render).toBeCalledWith('pages/about', { usuario } )
    })
})