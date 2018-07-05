const acolhidoRoutes = require("../../../src/routes/acolhido/get")

describe('Quando acesso acolhido', () => {
    it('Deve mostrar pagina com prescrição e suas abas atualizaveis', (done) => {
        const Acolhido = {
            findOne: jest.fn()
        }

        const model = {
            include: jest.fn()
        }
        const req = { params: { acolhido_id: 1, prescricao_id: 1 }, urlOriginal: '' }
        const res = { render: jest.fn() }

        const acolhido = {
            nome: 'Leo',
            id: '1',
            nascimento: 'Luna',
            peso: 'Luna',
            alergias: 'Luna',
            viaAlimentacao: 'Luna',
            prescricaos: [{
                id: 1,
                data: '2018-06-15',
                validade: '2018-06-08',
                acolhido_id: '1',
            }],
        }

        const updateUrl = req.urlOriginal
        const prescricaoId = req.params.prescricao_id
        const prescricaos = acolhido.prescricaos

        Acolhido.findOne.mockResolvedValue(acolhido);
        model.include.mockResolvedValue(prescricaos);

        acolhidoRoutes(Acolhido, model)(req, res)
            .then(() => expect(Acolhido.findOne).toBeCalledWith({ 'where': { 'id': req.params.acolhido_id }, 'include': [{ model, 'required': false, 'where': { 'acolhido_id': req.params.acolhido_id } }] }))
            .then(() => expect(res.render).toBeCalledWith('pages/infoAcolhido', { acolhido, prescricaoId, prescricaos, updateUrl }))
            .then(done)
            .catch(done)
    })
})