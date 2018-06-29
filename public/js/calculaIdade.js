function calcularIdade(dataAcolhido) {
  let array = dataAcolhido.split("/")
  let dataNascimento = array[1] + "/" + array[0] + "/" + array[2]  
  let data = new Date(dataNascimento);
  let dataHoje = new Date();
  let ano = dataHoje.getFullYear();
  let aniversario = new Date(ano, data.getMonth(), data.getDate());
  let idade = ano - data.getFullYear();
  if (aniversario > dataHoje) {
      idade--
  }
  document.getElementById("idade").innerHTML = idade;
}