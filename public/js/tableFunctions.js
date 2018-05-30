window.addEventListener('load', () => {
    let tables = document.getElementsByClassName('js-table-container')

    for (let table of tables) {
        let tableObj
        if (table.getElementsByClassName('js-novo-elemento-pomada').item(0)) {
            tableObj = Table(table)
            tableObj.initializeButtonPomada()
        } else if (table.getElementsByClassName('js-novo-elemento-cuidados').item(0)) {
            tableObj = Table(table)
            tableObj.initializeButtonCuidados()
        }
        else {
            tableObj = Table(table)
            tableObj.initializeButton()
        }
        table.table = tableObj
    }

})

let Table = (tableContainer) => ({
    tableContainer: tableContainer,
    tableBody: tableContainer.getElementsByTagName('tbody').item(0),
    novoElForm: tableContainer.getElementsByClassName('js-novo-elemento').item(0),
    novoElFormPom: tableContainer.getElementsByClassName('js-novo-elemento-pomada').item(0),
    novoElFormCuid: tableContainer.getElementsByClassName('js-novo-elemento-cuidados').item(0),

    appendRow(row) {
        this.tableBody.insertBefore(row, this.novoElForm)
    },
    appendRowPom(row) {
        this.tableBody.insertBefore(row, this.novoElFormPom)
    },
    appendRowCuid(row) {
        this.tableBody.insertBefore(row, this.novoElFormCuid)
    },

    createRow(novoMedicamento, novoVia, novoIntervalo, novoFormaFarmaceutica, novoObservacao, novoDataDePrescricao) {
        let row = document.createElement('tr')

        for (let arg of arguments) {
            let td = document.createElement('td')
            td.innerHTML = arg
            row.appendChild(td)
        }

        return row
    },
    createRowPom(novoMedicamento, novoLocal, novoIntervalo, novoObservacao, novoDataDePrescricao) {
        let row = document.createElement('tr')

        for (let arg of arguments) {
            let td = document.createElement('td')
            td.innerHTML = arg
            row.appendChild(td)
        }

        return row
    },
    createRowCuid(novoCuidado, novoPeriodo, novoHorario, novoObservacao, novoDataDePrescricao) {
        let row = document.createElement('tr')

        for (let arg of arguments) {
            let td = document.createElement('td')
            td.innerHTML = arg
            row.appendChild(td)
        }

        return row
    },

    initializeButton() {
        tableContainer.getElementsByClassName('js-add').item(0).addEventListener('click', () => {
            let novoMedicamento = this.novoElForm.querySelector('.js-novo-medicamento').value
            let novoVia = this.novoElForm.querySelector('.js-novo-via').value
            let novoIntervalo = this.novoElForm.querySelector('.js-novo-intervalo').value
            let novoFormaFarmaceutica = this.novoElForm.querySelector('.js-novo-forma-farmaceutica').value
            let novoObservacao = this.novoElForm.querySelector('.js-novo-observacao').value
            let novoDataDePrescricao = this.novoElForm.querySelector('.js-novo-data-de-prescricao').value
            this.appendRow(this.createRow(novoMedicamento.toUpperCase(), novoVia.toUpperCase(), novoIntervalo.toUpperCase(),
                novoFormaFarmaceutica.toUpperCase(), novoObservacao.toUpperCase(),
                novoDataDePrescricao.toUpperCase()))

            const clearAllInputs = (inputList) => inputList.forEach(input => input.value = "")

            const inputsByClassName = (className) => () => [...document.querySelectorAll(className)]

            const clearMed = inputsByClassName('.js-novo-medicamento');
            const clearVia = inputsByClassName('.js-novo-via');
            const clearInter = inputsByClassName('.js-novo-intervalo');
            const clearForma = inputsByClassName('.js-novo-forma-farmaceutica');
            const clearObservacao = inputsByClassName('.js-novo-observacao');
            const clearData = inputsByClassName('.js-novo-data-de-prescricao');

            [clearMed(), clearVia(), clearInter(), clearForma(), clearObservacao(), clearData()]
                .forEach(clearAllInputs)
        })
    },
    initializeButtonPomada() {
        tableContainer.getElementsByClassName('js-add').item(0).addEventListener('click', () => {

            let novoMedicamento = this.novoElFormPom.querySelector('.js-novo-medicamento').value
            let novoLocal = this.novoElFormPom.querySelector('.js-novo-local').value
            let novoIntervalo = this.novoElFormPom.querySelector('.js-novo-intervalo').value
            let novoObservacao = this.novoElFormPom.querySelector('.js-novo-observacao').value
            let novoDataDePrescricao = this.novoElFormPom.querySelector('.js-novo-data-de-prescricao').value
            this.appendRowPom(this.createRowPom(novoMedicamento.toUpperCase(), novoLocal.toUpperCase(), novoIntervalo.toUpperCase(),
                novoObservacao.toUpperCase(), novoDataDePrescricao.toUpperCase()))

            const clearAllInputs = (inputList) => inputList.forEach(input => input.value = "")

            const inputsByClassName = (className) => () => [...document.querySelectorAll(className)]

            const clearMed = inputsByClassName('.js-novo-medicamento');
            const clearLocal = inputsByClassName('.js-novo-local');
            const clearInter = inputsByClassName('.js-novo-intervalo');
            const clearObservacao = inputsByClassName('.js-novo-observacao');
            const clearData = inputsByClassName('.js-novo-data-de-prescricao');

            [clearMed(), clearLocal(), clearInter(), clearObservacao(), clearData()]
                .forEach(clearAllInputs)
        })
    },

    initializeButtonCuidados() {
        tableContainer.getElementsByClassName('js-add').item(0).addEventListener('click', () => {

            let novoCuidado = this.novoElFormCuid.querySelector('.js-novo-cuidado').value
            let novoPeriodo = this.novoElFormCuid.querySelector('.js-novo-periodo').value
            let novoHorario = this.novoElFormCuid.querySelector('.js-novo-horario').value
            let novoObservacao = this.novoElFormCuid.querySelector('.js-novo-observacao').value
            let novoDataDePrescricao = this.novoElFormCuid.querySelector('.js-novo-data-de-prescricao').value
            this.appendRowCuid(this.createRowCuid(novoCuidado.toUpperCase(), novoPeriodo.toUpperCase(), novoHorario.toUpperCase(),
                novoObservacao.toUpperCase(), novoDataDePrescricao.toUpperCase()))

            const clearAllInputs = (inputList) => inputList.forEach(input => input.value = "")

            const inputsByClassName = (className) => () => [...document.querySelectorAll(className)]

            const clearCuid = inputsByClassName('.js-novo-cuidado');
            const clearPeriodo = inputsByClassName('.js-novo-periodo');
            const clearHorario = inputsByClassName('.js-novo-horario');
            const clearObservacao = inputsByClassName('.js-novo-observacao');
            const clearData = inputsByClassName('.js-novo-data-de-prescricao');

            [clearCuid(), clearPeriodo(), clearHorario(), clearObservacao(), clearData()]
                .forEach(clearAllInputs)
        })
    }
})