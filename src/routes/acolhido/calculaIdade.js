module.exports = calculaIdade => (dobString) => {
    let dob = new Date(dobString);
    let data = new Date();
    let ano = data.getFullYear();
    let aniversario = new Date(ano, dob.getMonth(), dob.getDate());
    let idade = ano - dob.getFullYear();
    if (aniversario > data) {
        idade--;
    }
    function calcular(data) {
        let data = document.form.nascimento.value;
        let partes = data.split("/");
        let junta = partes[2] + "-" + partes[1] + "-" + partes[0];
        document.form.idade.value = (calculaIdade(junta));
    }
    return idade;
    
}