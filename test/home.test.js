const home = require('../src/home')

describe('A rota GET /', () => {
  it('Mostra Bye Aceleradora', () => {
    const req = {}
    const res = {send: jest.fn()}

    home(req, res)

    expect(res.send).toBeCalledWith('Bye Aceleradora')
  })
})
