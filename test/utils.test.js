const utils = require('../src/utils')

describe('Utils', () => {
  describe('callAll', () => {
    it('chama todas as funcoes que recebe', () => {
      const aFunction = jest.fn();
      const anotherFunction = jest.fn();

      utils.callAll(aFunction, anotherFunction);

      expect(aFunction).toBeCalled();
      expect(anotherFunction).toBeCalled();
    })
  })
})
