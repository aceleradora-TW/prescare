const sequelize = require('sequelize')
const dietaRoute = require('../../../src/routes/dieta/update')

describe('Quando acesso dieta', () => {
  it('Deve atualizar informações das dietas', (done) => {

    const Dieta = { findOne: jest.fn() }
    const req = {
      params: {
        dieta_id: 1,
        acolhido_id: 1,
        prescricao_id: 1
      },
      body: {
        tipo: 'Algo',
        intervalo: '8h - 8h',
        observacoes: 'toddynho'
      }
    }
    const res = { redirect: jest.fn() }
    const dieta = { id: 1, update: jest.fn()}

    Dieta.findOne.mockResolvedValue(dieta)
    dieta.update.mockResolvedValue(req.body)

    const Prescricao = {
      update: jest.fn()
    }
    const updatePrescricao = (
        {updated_at: sequelize.NOW},
        {where: {id: req.params.prescricao_id }}
    )
    Prescricao.update.mockResolvedValue(updatePrescricao)

    dietaRoute(Dieta, Prescricao)(req, res)
      .then(() => expect(Dieta.findOne).toBeCalledWith({ 'where': { 'id': req.params.dieta_id } }))
      .then(() => expect(dieta.update).toBeCalledWith(req.body))
      .then(() => expect(res.redirect).toBeCalledWith('/acolhido/' + req.params.acolhido_id + '/prescricao/' + req.params.prescricao_id + '/edit'))
      .then(done)
      .catch(done)
  })
})