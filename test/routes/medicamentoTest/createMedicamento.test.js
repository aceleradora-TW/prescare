const sequelize = require('sequelize')
const medicamentoRoute = require("../../../src/routes/medicamento/create")

describe('Quando crio medicamento', () => {
    it('Deve mostrar medicamento na tela', (done) => {
        const Medicamento = {
            create: jest.fn()
        }

        const req = { params: { prescricao_id: 1 }, originalUrl: '/acolhido/1/prescricao/1/medicamento' }
        const res = { redirect: jest.fn() }
        const novoMedicamento = { id: 2}

        Medicamento.create.mockResolvedValue(novoMedicamento)

        const Prescricao = {
            update: jest.fn()
        }
        const updatePrescricao = (
            {updated_at: sequelize.NOW},
            {where: {id: req.params.prescricao_id }}
        )
        Prescricao.update.mockResolvedValue(updatePrescricao)

        return medicamentoRoute(Medicamento, Prescricao)(req, res)
        .then(() => expect(Medicamento.create).toBeCalledWith(req.params))
        .then(() => expect(res.redirect).toBeCalledWith(req.originalUrl + '/2/edit'))
        .then(done)
        .catch(done)
    })
})
