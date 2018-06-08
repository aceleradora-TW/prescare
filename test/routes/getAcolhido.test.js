const acolhidoRoutes = require("../../src/routes/acolhido/get")

describe('Quando acesso acolhido', () => {
    it('Deve mostrar pagina com prescrição e suas abas atualizaveis', (done) => {
        const Acolhido = {
            findOne: jest.fn()
        }

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
        const prescricao = {id: '1', data: '05-05-2018 11:11:11' , validade: '05-05-2018 11:11:11', acolhido_id: '1' }
        Acolhido.findOne.mockResolvedValue(acolhido);

        return acolhidoRoute(Acolhido, prescricao)(req, res)
        .then(() => expect(Acolhido.findOne).toBeCalledWith({'where': {'id': req.params.acolhido_id }, 'include': {Prescricao: prescricao}}))
        .then(() => expect(res.render).toBeCalledWith('pages/info', { acolhido }))
>>>>>>> :rocket: <@ilizakoski, @murilobauerc, @luizfetrindade> Rodar com test está ok:test/routes/acolhido.test.js
        .then(done)
        .catch(done)
    })
})