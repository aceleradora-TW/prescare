const sequelize = require('sequelize')
const cuidadoRoute = require('../../../src/routes/cuidado/create')

describe('Quando acesso cuidado', () => {
  it('Deve criar página com informações dos cuidados', (done) => {
    const Cuidado = {
      create: jest.fn()
    }
    const req = { params: { prescricao_id: 1 }, originalUrl: '/acolhido/1/prescricao/1/cuidado' }
    const res = { redirect: jest.fn() }
    const novoCuidado = { id: 2 }
                
    Cuidado.create.mockResolvedValue(novoCuidado)

    const Prescricao = {
      update: jest.fn()
    }
    const updatePrescricao = (
      {updated_at: sequelize.NOW},
      {where: {id: req.params.prescricao_id }}
    )
    Prescricao.update.mockResolvedValue(updatePrescricao)
        
    cuidadoRoute(Cuidado, Prescricao)(req, res)
      .then(() => expect(Cuidado.create).toBeCalledWith(req.params))
      .then(() => expect(res.redirect).toBeCalledWith(req.originalUrl + '/2/edit'))
      .then(done)
      .catch(done)
  })
})
