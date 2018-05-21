<<<<<<< HEAD
function add_row(a) {
    console.log(a);
=======
function add_row() {
>>>>>>> dd4706fa614e4b6f7416152844555e24ea4b2d4f
    let novo_medicamento = document.getElementById("novo_medicamento").value;
    let novo_via = document.getElementById("novo_via").value;
    let novo_intervalo = document.getElementById("novo_intervalo").value;
    let novo_formaFarmaceutica = document.getElementById("novo_formaFarmaceutica").value;

    let table = document.getElementById("data_table");
    let table_len = (table.rows.length) - 1;
    let row = table.insertRow(table_len).outerHTML = "<tr id='row" + table_len + "'><td id='medicamento_row" + table_len + "'>" + novo_medicamento + "</td><td id='via_row" + table_len + "'>" + novo_via + "</td><td id='intervalor_row" + table_len + "'>" + novo_intervalo + "</td><td id='formaFarmaceutica_row" + table_len + "'>" + novo_formaFarmaceutica + "</td></tr>";

    document.getElementById("novo_medicamento").value = "";
    document.getElementById("novo_via").value = "";
    document.getElementById("novo_intervalo").value = "";
    document.getElementById("novo_formaFarmaceutica").value = "";
}
