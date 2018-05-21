window.addEventListener('load', () => {
    let tables = document.getElementsByClassName('js-table-container')

    for (let table of tables) {
        let tableObj = Table(table)
        tableObj.initializeButton()
        table.table = tableObj
    }
})

let Table = (tableContainer) => ({
    tableContainer: tableContainer,
    tableBody: tableContainer.getElementsByTagName('tbody').item(0),
    novoElForm: tableContainer.getElementsByClassName('js-novo-elemento').item(0),

    appendRow(row) {
        this.tableBody.insertBefore(row, this.novoElForm)
    },

    initializeButton() {
        tableContainer.getElementsByClassName('js-add').item(0).addEventListener('click', () => {
            let novoMedicamento = this.novoElForm.getElementsByClassName('js-novo-medicamento').item(0).value
            let novoVia = this.novoElForm.getElementsByClassName('js-novo-via').item(0).value
            let novoIntervalo = this.novoElForm.getElementsByClassName('js-novo-intervalo').item(0).value
            let novoFormaFarmaceutica = this.novoElForm.getElementsByClassName('js-novo-forma-farmaceutica').item(0).value

            this.appendRow(this.createRow(novoMedicamento, novoVia, novoIntervalo, novoFormaFarmaceutica)) 
        })
    },

    createRow(novoMedicamento, noovVia, novoIntervalo, novoFormaFarmaceutica) {
        let row = document.createElement('tr')
        
        for(let arg of arguments) {
            let td = document.createElement('td')
            td.innerHTML = arg
            row.appendChild(td)
        }

        return row;
    }
})
