const primeiroTeste = require('./primeiro_teste');


describe("Testando Hello world",()=>{
  it("Deve retornar hello world", ()=>{
    let result = primeiroTeste()
    expect(result).toEqual('Hello World')

  })
})
