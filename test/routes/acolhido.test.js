const acolhidoRoute = require("../../src/routes/acolhido")

describe('Quando acesso acolhido', () => {
    it('Deve mostrar pagina com prescrição e suas abas atualizaveis', () => {
        const req = {}
        const res = {render : jest.fn()}
        const acolhido = [{ alergias: 'nenhuma' ,  idade: 15, nome: 'Afonso', peso: 50, via : 'oral' } ]
        
        acolhidoRoute(acolhido)(req,res)
        
        expect(res.render).toBeCalledWith('pages/info', { acolhido })
    })
})