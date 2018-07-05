const medicamentoRoute = require("../../../src/routes/medicamento/get")

describe('Quando acesso medicamento', () => {
    it('Deve mostrar pagina com informações do medicamento', (done) => {
        const Medicamento = {
            findOne: jest.fn()
        }

        const req = { params: { medicamento_id: 1 } }
        const res = { render: jest.fn() }
        const medicamento = {
            id: 1,
            nome: 'Paracetonal',
            dosagem: '500ml',
            formaFarmaceutica: 'comprimido',
            via: 'oral',
            posologia: '2 cp 8h-16h',
            observacoes: 'nada',
            validade: '22/06/2018',
        }


        Medicamento.findOne.mockResolvedValue(medicamento);

        return medicamentoRoute(Medicamento)(req, res)
            .then(() => expect(Medicamento.findOne).toBeCalledWith({ 'where': { 'id': req.params.medicamento_id } }))
            .then(() => expect(res.render).toBeCalledWith('pages/editarMedicamento', { medicamento }))
            .then(done)
            .catch(done)
    })
})