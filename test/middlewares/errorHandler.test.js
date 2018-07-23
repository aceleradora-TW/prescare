const errorHandlerFactory = require('../../src/middlewares/errorHandler')

describe('Error handler', () => {

  const logger = {error: jest.fn()}
  const errorHandler = errorHandlerFactory(logger)

  beforeEach(() => {
    logger.error.mockReset()
  })

  describe('quando houver um erro na execucao da aplicacao', () => {

    const req = {}
    const res = {render: jest.fn()}
    const error = new Error('Deu ruim')

    beforeEach(() => {
      errorHandler(error, req, res)
    })

    it('loga informacoes do erro', () => {
      expect(logger.error).toBeCalledWith('Deu ruim')
    })

    it('renderiza pagina de erro', () => {
      expect(res.render).toBeCalledWith('pages/internalError', {error})
    })
  })
})
