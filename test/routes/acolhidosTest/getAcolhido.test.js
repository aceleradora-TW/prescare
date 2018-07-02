const acolhidoRoutes = require("../../../src/routes/acolhido/get")

describe('Quando acesso acolhido', () => {
    const Acolhido = {
        findOne: jest.fn()
    }
    const model = jest.mock()
    const acolhido = jest.mock()

    let req = { params: { acolhido_id: 1, prescricao_id: 1 }, urlOriginal: '', user: { tipo: 'medica' } }
    const res = { render: jest.fn() }

    const updateUrl = req.urlOriginal
    const prescricaoId = req.params.prescricao_id
    const prescricaos = acolhido.prescricaos

    Acolhido.findOne.mockResolvedValue(acolhido)

    describe('quando usuário é medica', () => {
        beforeEach(() => {
            req.user = { tipo: 'medica' }
        })

        it('Deve mostrar pagina com prescrição e suas abas atualizaveis', (done) => {
            acolhidoRoutes(Acolhido, model)(req, res)
                .then(() => expect(Acolhido.findOne).toBeCalledWith({ 'where': { 'id': req.params.acolhido_id }, 'include': [{ model, 'required': false, 'where': { 'acolhido_id': req.params.acolhido_id } }] }))
                .then(() => expect(res.render).toBeCalledWith('pages/infoAcolhido', { acolhido, prescricaoId, prescricaos, updateUrl }))
                .then(done)
                .catch(done)
        })
    })
    describe('quando usuário é farmaceutica', () => {
        beforeEach(() => {
            req.user = { tipo: 'farmaceutica' }
        })

        it('Deve mostrar pagina com prescrição e suas abas atualizaveis', (done) => {
            acolhidoRoutes(Acolhido, model)(req, res)
                .then(() => expect(Acolhido.findOne).toBeCalledWith({ 'where': { 'id': req.params.acolhido_id }, 'include': [{ model, 'required': false, 'where': { 'acolhido_id': req.params.acolhido_id } }] }))
                .then(() => expect(res.render).toBeCalledWith('pages/farmaceutica/infoAcolhidoFarmaceutica', { acolhido, prescricaoId, prescricaos, updateUrl }))
                .then(done)
                .catch(done)
        })
    })
})