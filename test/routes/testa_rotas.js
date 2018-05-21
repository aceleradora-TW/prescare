const testa_rotas = require ('routes/testa_rotas')


it('responds with status 500', () => {
    expect(response.status).toBeCalledWith(500)
  })