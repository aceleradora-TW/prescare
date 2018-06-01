const acolhidoRoute = require("../../src/routes/acolhido/get")

describe('Quando acesso acolhido', () => {
    it('Deve mostrar pagina com prescrição e suas abas atualizaveis', (done) => {
        const Acolhido = {
            findOne: jest.fn()
        }

        const req = { params: { acolhido_id: 1 } }
        const res = { render: jest.fn() }
        const acolhido = { nome: 'Leo', id: '1', idade: 'Luna' , peso: 'Luna' , alergias: 'Luna' , via_alimentacao: 'Luna' }
        Acolhido.findOne.mockResolvedValue(acolhido);

        return acolhidoRoute(Acolhido)(req, res)
        .then(() => expect(Acolhido.findOne).toBeCalledWith( {'where': {'id': req.params.acolhido_id }}))
<<<<<<< 9546b7f5e4d175f09346d462f5d8673f4d969912
        .then(() => expect(res.render).toBeCalledWith('pages/acolhido', { acolhido }))
=======
        .then(() => expect(res.render).toBeCalledWith('pages/info', { acolhido }))
>>>>>>> Fazendo o CRUD de prescrição para acolhido, baseado na discussão do dia 01/06/2018
        .then(done)
        .catch(done)
    })
})
