const notFoundHandlerFactory = require('../../src/middlewares/notFoundHandler')

  describe('quando o request chegar ao middleware notFoundHandler', () => {
    const notFoundHandler = notFoundHandlerFactory()
    const req = {}
    const res = {render: jest.fn()}

    beforeEach(() => {
      notFoundHandler(req, res)
    })

    it('A pagina de erro 404 e renderizada', () => {
      expect(res.render).toBeCalledWith('pages/notFound')
    })
  })
