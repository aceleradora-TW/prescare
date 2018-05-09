/*
 * O require funciona como os comandos do Linux. Temos que passar o caminho correto do arquivo que queremos importar.
 * Como estamos em test/calculadora.test.js, precisamos voltar um nivel (../) e indicar a pasta src e o arquivo calculadora.js
 */
const calculadora = require('../src/calculadora.js')

describe('Calculadora', () => {

  it('Deve somar corretamente', () => {
    const resultado = calculadora.soma(1, 1)

    expect(resultado).toEqual(2)
  })

  it('Deve subtrair corretamente', () => {
    const resultado = calculadora.subtrai(1, 1)

    expect(resultado).toEqual(0)
  })
})
