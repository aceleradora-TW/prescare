function calcularIdade(dataAcolhido) {
  let data = new Date(dataAcolhido);
  let dataHoje = new Date();
  let ano = dataHoje.getFullYear();
  let aniversario = new Date(ano, data.getMonth(), data.getDate());
  let idade = ano - data.getFullYear();
  if (aniversario > dataHoje) {
      idade--
  }
  document.getElementById("idade").innerHTML = idade;
}