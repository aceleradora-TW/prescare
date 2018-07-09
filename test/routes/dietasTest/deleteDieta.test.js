const sequelize = require('sequelize')
const dietaRoute = require('../../../src/routes/dieta/destroy')

describe('Quando deleto dieta', () => {
    it('Deve deletar informações da dieta', (done) => {
        const Dieta = {
            destroy: jest.fn().mockResolvedValue()
        }
        const req = { params: { prescricao_id: 1, acolhido_id: 2, dieta_id: 3 } }
        const res = { redirect: jest.fn() }
        
        const Prescricao = {
            update: jest.fn()
        }
        const updatePrescricao = (
            {updated_at: sequelize.NOW},
            {where: {id: req.params.prescricao_id }}
        )
        Prescricao.update.mockResolvedValue(updatePrescricao)
        
        dietaRoute(Dieta, Prescricao)(req, res)
        .then(() => expect(Dieta.destroy).toBeCalledWith({"where" :{ "id": req.params.dieta_id }} ))
        .then(() => expect(res.redirect).toBeCalledWith('/acolhido/2/prescricao/1/edit'))
        .then(done)
        .catch(done)
    })
})