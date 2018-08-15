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
    const cuidado = { id: 1, update: jest.fn().mockResolvedValue(this) }

    Cuidado.findOne.mockResolvedValue(cuidado)

    cuidadoRoute(Cuidado)(req, res)
      .then(() => expect(Cuidado.findOne).toBeCalledWith({ 'where': { 'id': req.params.cuidado_id } }))
      .then(() => expect(cuidado.update).toBeCalledWith(req.body))
      .then(() => expect(res.redirect).toBeCalledWith('/acolhido/' + req.params.acolhido_id + '/prescricao/' + req.params.prescricao_id + '/edit'))
      .then(done)
      .catch(done)
  })
})
