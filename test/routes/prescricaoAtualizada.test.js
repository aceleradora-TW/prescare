const prescricaoAtualizada = require("../../src/routes/prescricaoAtualizada")

describe('Quando acessar pagina da prescrição', () => {
    it('Deve mostrar uma lista de nomes', () => {
        const req = {}
        const res = { render: jest.fn() }
        const listaPrescricoes = [{ nome: 'Leo' }, { nome: 'Luna' } ]

        prescricaoAtualizada(listaPrescricoes)(req, res)

        expect(res.render).toBeCalledWith('pages/prescricaoAtualizada', { listaPrescricoes })
    })
})