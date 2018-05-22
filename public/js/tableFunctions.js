window.addEventListener('load', () => {
    let tables = document.getElementsByClassName('js-table-container')

    for (let table of tables) {
        let tableComponent = Table(table)
        tableComponent.initialize()
    }
})

let Table = (tableContainer) => ({
    tableContainer: tableContainer,
    tableBody: tableContainer.querySelector('tbody'),
    novoElForm: tableContainer.querySelector('.js-novo-elemento'),
    inputs: tableContainer.querySelectorAll('input:not(.js-add)'),

    initialize() {
        this.linkComponentToDOMObject()
        this.appendButtonEventListener()
    },

    appendRow(row) {
        this.tableBody.insertBefore(row, this.novoElForm)
        this.clearInputs()
    },

    appendButtonEventListener() {
        tableContainer.querySelector('.js-add').addEventListener('click', () => this.appendRow(this.createRow()))
    },

    createRow() {
        let row = document.createElement('tr')

        for (let input of this.inputs) {
            let td = document.createElement('td')
            td.innerHTML = input.value
            row.appendChild(td)
        }

        return row
    },

    clearInputs() {
        for(input of this.inputs) {
            input.value = ""
        }
    },

    linkComponentToDOMObject() {
        this.tableContainer.table = this;
    }
})
