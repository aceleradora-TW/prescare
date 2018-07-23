const dietaRoute = require('../../../src/routes/dieta/get')

describe('Quando acesso dieta', () => {
  it('Deve mostrar pagina com informações do dieta', (done) => {
    const Dieta = {
      findOne: jest.fn()
    }
       
    const req = { params: { dietaId: 1 },user: { tipo:  'clinica' } }
    const res = { render: jest.fn() }
    const dieta = { 
      id: 1,
      intervalo: '8h-8h',
      tipo: 'continuo'
    }

    Dieta.findOne.mockResolvedValue(dieta)

    dietaRoute(Dieta)(req, res)
      .then(() => expect(Dieta.findOne).toBeCalledWith( {'where': {'id': req.params.id }}))
      .then(() => expect(res.render).toBeCalledWith('pages/editarDieta', { dieta }))
      .then(done)
      .catch(done)
  })
})