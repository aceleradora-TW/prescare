const sequelize = require('sequelize')
const cuidadoRoute = require('../../../src/routes/cuidado/update')

describe('Quando acesso cuidado', () => {
    it('Deve atualizar informações dos cuidados', (done) => {
        const Cuidado = { findOne: jest.fn() }
        const req = {
            params: {
                cuidado_id: 1,
                acolhido_id: 1,
                prescricao_id: 1
            },
            body: {
                descricao: 'cuidado',
                intervalo: '8h - 8h',
                observacoes: 'nada',
            },
            user: {
                tipo: 'clinica'
            }
        }
        const res = { redirect: jest.fn() }

        const cuidado = { id: 1, update: jest.fn() }

        Cuidado.findOne.mockResolvedValue(cuidado)
        cuidado.update.mockResolvedValue(req.body)

        const Prescricao = {
            update: jest.fn()
        }
        const updatePrescricao = (
            {updated_at: sequelize.NOW},
            {where: {id: req.params.prescricao_id }}
        )
        Prescricao.update.mockResolvedValue(updatePrescricao)

        cuidadoRoute(Cuidado, Prescricao)(req, res)
            .then(() => expect(Cuidado.findOne).toBeCalledWith({ 'where': { 'id': req.params.cuidado_id } }))
            .then(() => expect(cuidado.update).toBeCalledWith(req.body))
            .then(() => expect(res.redirect).toBeCalledWith('/acolhido/' + req.params.acolhido_id + '/prescricao/' + req.params.prescricao_id + '/edit'))
            .then(done)
            .catch(done)
    })
})
