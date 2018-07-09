const sequelize = require('sequelize')
const medicamentoRoute = require('../../../src/routes/medicamento/destroy')

describe('Quando deleto medicamento', () => {
    it('Deve deletar informações dos medicamentos', (done) => {
        const Medicamento = {
            destroy: jest.fn().mockResolvedValue()
        }
        const req = { params: { prescricao_id: 1, acolhido_id: 2, medicamento_id: 3 } }
        const res = { redirect: jest.fn() }
        
        const Prescricao = {
            update: jest.fn()
        }
        const updatePrescricao = (
            {updated_at: sequelize.NOW},
            {where: {id: req.params.prescricao_id }}
        )
        Prescricao.update.mockResolvedValue(updatePrescricao)
        
        medicamentoRoute(Medicamento, Prescricao)(req, res)
        .then(() => expect(Medicamento.destroy).toBeCalledWith({"where" :{ "id": req.params.medicamento_id }} ))
        .then(() => expect(res.redirect).toBeCalledWith('/acolhido/2/prescricao/1/edit'))
        .then(done)
        .catch(done)
    })
})