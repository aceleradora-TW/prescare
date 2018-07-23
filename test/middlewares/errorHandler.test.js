const errorHandlerFactory = require('../../src/middlewares/errorHandler')

describe('Error handler', () => {

  const logger = {error: jest.fn()}
  const errorHandler = errorHandlerFactory(logger)

  beforeEach(() => {
    logger.error.mockReset()
  })

  describe('quando houver um erro na execucao da aplicacao', () => {

    const req = {}
    const res = {render: jest.fn(), status: jest.fn()}
    const error = new Error('Deu ruim')

    beforeEach(() => {
      errorHandler(error, req, res)
    })

    it('loga informacoes do erro', () => {
      expect(logger.error).toBeCalledWith('Deu ruim')
    })

    it('renderiza pagina de erro com status HTTP 500', () => {
      expect(res.status).toBeCalledWith(500)
      expect(res.render).toBeCalledWith('pages/internalError', {error})
    })
  })

  describe('quando nao houver um erro na execucao da aplicacao, mas ainda assim o handler atender ao request', () => {

    const req = {}
    const res = {}
    const next = jest.fn()

    beforeEach(() => {
      errorHandler(undefined, req, res, next)
    })

    it('entao o request deve ser enviado para o handler de not found', () => {
      expect(next).toBeCalled()
    })
  })
})
