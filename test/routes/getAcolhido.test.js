const acolhidoRoutes = require("../../src/routes/acolhido/get")

describe('Quando acesso acolhido', () => {
    it('Deve mostrar pagina com prescrição e suas abas atualizaveis', (done) => {
        const Acolhido = {
            findOne: jest.fn()
        }
        const Prescricao = jest.mock()

        const req = { params: { acolhido_id: 1 } }
        const res = { render: jest.fn() }
<<<<<<< 145c72f8682524c7ce0fbcfbe559e88a7c19c30b:test/routes/getAcolhido.test.js
        const acolhido = { nome: 'Leo', id: '1', idade: 'Luna' , peso: 'Luna' , alergias: 'Luna' , viaAlimentacao: 'Luna' }
        Acolhido.findOne.mockResolvedValue(acolhido);

         acolhidoRoutes(Acolhido)(req, res)
        .then(() => expect(Acolhido.findOne).toBeCalledWith( {'where': {'id': req.params.acolhido_id }}))
        .then(() => expect(res.render).toBeCalledWith('pages/infoAcolhido', { acolhido }))
=======
        const acolhido = { nome: 'Leo', id: '1', idade: 'Luna' , peso: 'Luna' , alergias: 'Luna' , via_alimentacao: 'Luna' }

        Acolhido.findOne.mockResolvedValue(acolhido);

        return acolhidoRoute(Acolhido, Prescricao)(req, res)
        .then(() => expect(Acolhido.findOne).toBeCalledWith({where: {id: 1}, include: [Prescricao]}))
        .then(() => expect(res.render).toBeCalledWith('pages/info', { acolhido }))
>>>>>>> :rocket: <@ilizakoski, @murilobauerc, @luizfetrindade> Rodar com test está ok:test/routes/acolhido.test.js
        .then(done)
        .catch(done)
    })
})