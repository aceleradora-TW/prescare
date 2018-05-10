function soma(umValor, outroValor) {
  let resultado
  resultado = umValor + outroValor
  return resultado
}

function subtrai(umValor, outroValor) {
  let resultado
  resultado = umValor - outroValor
  return resultado
}

function multiplica(umValor, outroValor){
  let resultado
  resultado = umValor * outroValor
  return resultado
}

function dividir(umValor, outroValor) {
  let resultado
  resultado = umValor / outroValor
  return resultado
}
module.exports = {soma, subtrai, multiplica, dividir}
