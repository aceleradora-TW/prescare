const medicamentoRoute = require("../../../src/routes/medicamento/create")


describe('Quando crio medicamento', () => {
    it('Deve mostrar medicamento na tela', (done) => {
        const Medicamento = {
            create: jest.fn()
        }

        const req = { params: { prescricaoId: 1 }, originalUrl: '/acolhido/1/prescricao/1/medicamento' }
        const res = { redirect: jest.fn() }
        const novoMedicamento = { id: 2}

        Medicamento.create.mockResolvedValue(novoMedicamento)

        return medicamentoRoute(Medicamento)(req, res)
        .then(() => expect(Medicamento.create).toBeCalledWith(req.params))
        .then(() => expect(res.redirect).toBeCalledWith(req.originalUrl + '/2/edit'))
        .then(done)
        .catch(done)
    })
})
