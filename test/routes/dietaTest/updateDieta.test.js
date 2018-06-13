const dietaRoute = require('../../../src/routes/dieta/update')

describe('Quando acesso dieta', () => {
  it('Deve atualizar informações das dietas', (done) => {

    const dieta = { id: 1, update: jest.fn() }
    const Dieta = { findOne: jest.fn() }
    const req = {
      params: {
        dieta_id: 1,
        acolhido_id: 2,
        prescricao_id: 3
      },
      body: {
        tipo: 'Algo',
        intervalo: '8h - 8h',
      }
    }
    const res = { redirect: jest.fn() }

    Dieta.findOne.mockResolvedValue(dieta)
    dieta.update.mockResolvedValue(req.body)

    dietaRoute(Dieta)(req, res)
      .then(() => expect(Dieta.findOne).toBeCalledWith({ 'where': { 'id': req.params.dieta_id } }))
      .then(() => expect(dieta.update).toBeCalledWith(req.body))
      .then(() => expect(res.redirect).toBeCalledWith(req.originalUrl))
      .then(done)
      .catch(done)
  })
})
