const listaAcolhidos = require("../../../src/routes/acolhido/listaAcolhidos")
const moment = require('moment')
describe('Quando acesso listaAcolhidos', () => {
    it('Deve mostrar uma lista de nomes', (done) => {

        const Acolhido = {
            findAll: jest.fn()
        }

        const model = {
            include: jest.fn()
        }
        const req = {}
        const res = { render: jest.fn() }
        const acolhidos = [{
            id: '1',
            nome: 'Leo',
            prescricaos: [{
                validade: '2018-06-08',
                updated_at: '2018-06-15',
                acolhido_id: '1',
            }]
        }]

        const prescricaos = acolhidos.prescricaos

        Acolhido.findAll.mockResolvedValue(acolhidos)
        model.include.mockResolvedValue(prescricaos)

        listaAcolhidos(Acolhido, model)(req, res)
            .then(() => expect(Acolhido.findAll).toBeCalledWith({
                order: [['nome', 'ASC'], [{ model }, 'validade', 'DESC']],
                include: [{ model, required: false, attributes: ['validade', 'updated_at'] }]
            }))
            .then(() => expect(res.render).toBeCalledWith('pages/listaAcolhidos', {
                acolhidos, prescricaos, moment
            }))
            .then(done)
            .catch(done)
    })
})


