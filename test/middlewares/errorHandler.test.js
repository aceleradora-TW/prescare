const errorHandlerFactory = require('../../src/middlewares/errorHandler');

describe('Error handler', () => {

  const logger = jest.fn();
  const errorHandler = errorHandlerFactory(logger);

  beforeEach(() => {
    logger.mockReset();
  });

  describe('quando houver um erro na execucao da aplicacao', () => {

    const req = {};
    const res = {render: jest.fn()};
    const error = new Error('Deu ruim');

    beforeEach(() => {
      errorHandler(error, req, res);
    });

    it('renderiza pagina de erro', () => {
      expect(res.render).toBeCalledWith('pages/error');
    });

    it('loga informacoes do erro', () => {
      expect(logger).toBeCalledWith('Deu ruim');
    });

  });

  describe('quando o request nao for atendido por nenhuma outra rota ou middleware', () => {
    const req = {};
    const res = {render: jest.fn()};

    beforeEach(() => {
      errorHandler(undefined, req, res);
    });

    it('renderiza pagina de 404', () => {
      expect(res.render).toBeCalledWith('pages/error');
    });
  });
});
