const notFoundHandlerFactory = require('../../src/middlewares/notFoundHandler')

  describe('quando o request chegar ao middleware notFoundHandler', () => {
    const notFoundHandler = notFoundHandlerFactory()
    const req = {}
    const res = {render: jest.fn(), status: jest.fn()}

    beforeEach(() => {
      notFoundHandler(req, res)
    })

    it('A pagina de erro 404 eh renderizada com status HTTP 404', () => {
      expect(res.status).toBeCalledWith(404)
      expect(res.render).toBeCalledWith('pages/notFound')
    })
  })
