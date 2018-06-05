
window.addEventListener('load', () => {
    let tables = document.getElementsByClassName('js-table-container')

    for (let table of tables) {
        (table.getElementsByClassName('js-novo-elemento-cuidados').item(0)) 
        let tableObj
        tableObj = Table(table)
        tableObj.initializeButtonCuidados()
        table.table = tableObj
    }
})

let Table = (tableContainer) => ({
    tableContainer: tableContainer,
    tableBody: tableContainer.getElementsByTagName('tbody').item(0),
    novoElFormCuid: tableContainer.getElementsByClassName('js-novo-elemento-cuidados').item(0),

    appendRowCuid(row) {
        this.tableBody.insertBefore(row, this.novoElFormCuid)
    },
 
    createRowCuid(descricao, intervalo, observacao) {
        let row = document.createElement('tr')

        for (let arg of arguments) {
            let td = document.createElement('td')
            td.innerHTML = arg
            row.appendChild(td)
        }
        return row
    },

    initializeButtonCuidados() {
        tableContainer.getElementsByClassName('js-add').item(0).addEventListener('click', () => {

            let descricao = this.novoElFormCuid.querySelector('.js-novo-descricao').value
            let intervalo = this.novoElFormCuid.querySelector('.js-novo-intervalo').value
            let observacao = this.novoElFormCuid.querySelector('.js-novo-observacao').value
            this.appendRowCuid(this.createRowCuid(descricao.toUpperCase(), intervalo.toUpperCase(), observacao.toUpperCase()))

            const clearAllInputs = (inputList) => inputList.forEach(input => input.value = "")

            const inputsByClassName = (className) => () => [...document.querySelectorAll(className)]

            const clearDescricao = inputsByClassName('.js-novo-descricao');
            const clearIntervalo = inputsByClassName('.js-novo-intervalo');
            const clearObservacao = inputsByClassName('.js-novo-observacao');

            [clearDescricao(), clearIntervalo(), clearObservacao()].forEach(clearAllInputs)
        })
    }
})