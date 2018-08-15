const dietaRoute = require('../../../src/routes/dieta/update')

describe('Quando acesso dieta', () => {
  it('Deve atualizar informações das dietas', (done) => {
    const dieta = { id: 1, update: jest.fn().mockResolvedValue(this) }
    const Dieta = { findOne: jest.fn().mockResolvedValue(dieta) }
    
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

    dietaRoute(Dieta)(req, res)
      .then(() => expect(Dieta.findOne).toBeCalledWith({ 'where': { 'id': req.params.dieta_id } }))
      .then(() => expect(dieta.update).toBeCalledWith(req.body))
      .then(() => expect(res.redirect).toBeCalledWith('/acolhido/' + req.params.acolhido_id + '/prescricao/' + req.params.prescricao_id + '/edit'))
      .then(done)
      .catch(done)
  })
})
