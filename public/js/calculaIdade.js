function calcularIdade(dataAcolhido) {
  var dataNascimento = dataAcolhido;
  var data = new Date(dataNascimento);
  var dataHoje = new Date();
  var ano = dataHoje.getFullYear();
  var aniversario = new Date(ano, data.getMonth(), data.getDate());
  var idade = ano - data.getFullYear();
  if (aniversario > dataHoje) {
      idade--
  }
  document.getElementById("idade").innerHTML = idade;
}