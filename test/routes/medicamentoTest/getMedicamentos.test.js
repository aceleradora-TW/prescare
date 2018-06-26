const medicamentoRoute = require("../../../src/routes/medicamento/get")

describe('Quando acesso medicamento', () => {
    it('Deve mostrar pagina com informações do medicamento', (done) => {
        const Medicamento = {
            findOne: jest.fn()
        }
       
        const req = { params: { medicamento_id: 1 },user: { tipo:  'medica' } }
        const res = { render: jest.fn() }
        const medicamento = { 
            id: 1,
            nome: 'Paracetonal',
            via: 'oral',
            formaFarmaceutica: 'comprimido',
            intervalo: '8h-8h',
            dosagem: '500ml',
            validade: 's2/06/2018',
            lote: '659dfrty6',
            tipo: 'continuo'
        }

        Medicamento.findOne.mockResolvedValue(medicamento);

        return medicamentoRoute(Medicamento)(req, res)
        .then(() => expect(Medicamento.findOne).toBeCalledWith( {'where': {'id': req.params.medicamento_id }}))
        .then(() => expect(res.render).toBeCalledWith('pages/editarMedicamento', { medicamento }))
        .then(done)
        .catch(done)
    })
})