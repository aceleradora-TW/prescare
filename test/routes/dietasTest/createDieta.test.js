const sequelize = require('sequelize')
const dietaRoute = require('../../../src/routes/dieta/create')

describe('Quando acesso dieta', () => {
  it('Deve criar página com informações das dietas', (done) => {
    const Dieta = {
      create: jest.fn()
    }
    
    const req = { params: { prescricao_id: 1 }, originalUrl: '/acolhido/1/prescricao/1/dieta' }
    const res = { redirect: jest.fn() }
    const novaDieta = { id: 2 }
                
    Dieta.create.mockResolvedValue(novaDieta)

    const Prescricao = {
      update: jest.fn()
    }
    const updatePrescricao = (
      {updated_at: sequelize.NOW},
      {where: {id: req.params.prescricao_id }}
    )

    Prescricao.update.mockResolvedValue(updatePrescricao)
        
    dietaRoute(Dieta, Prescricao)(req, res)
      .then(() => expect(Dieta.create).toBeCalledWith(req.params))
      .then(() => expect(res.redirect).toBeCalledWith(req.originalUrl + '/2/edit'))
      .then(done)
      .catch(done)
  })
})