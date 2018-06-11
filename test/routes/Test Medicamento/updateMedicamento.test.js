const medicamentoRoute = require("../../../src/routes/medicamento/update")

describe('Quando acesso Medicamentos', () => {
    it('Deve atualizar informações dos Medicamentos', (done) => {
        const Medicamento = { findOne: jest.fn() }
        const req = {
            params: {
                medicamento_id: 1,
                acolhido_id: 1,
                prescricao_id: 1
            },
            body: {
                nome: 'medicamento',
                intervalo: '8h-8h',
                via: 'oral',
                formaFarmaceutica: 'gostas',
                dosagem:'99',
                validade:'10/03/1005',
                lote:'uhsua',
                }
        }
        const res = { redirect: jest.fn() }

        const medicamento = { id: 1, update: jest.fn() }
        const novoMedicamento = {
            nome:  req.body.nome,
            intervalo:  req.body.intervalo,
            via:  req.body.via,
            formaFarmaceutica:  req.body.formaFarmaceutica,
            dosagem: req.body.dosagem,
            validade: req.body.validade,
            lote: req.body.lote
        }
        Medicamento.findOne.mockResolvedValue(medicamento)
        medicamento.update.mockResolvedValue(novoMedicamento)

        medicamentoRoute(Medicamento)(req, res)
        .then(() => expect(Medicamento.findOne).toBeCalledWith({'where': {'id': req.params.medicamento_id }}))
        .then(() => expect(medicamento.update).toBeCalledWith(novoMedicamento))
        .then(() => expect(res.redirect).toBeCalledWith('/acolhido/' + req.params.acolhido_id + '/prescricao/' + req.params.prescricao_id + '/edit'))
        .then(done)
        .catch(done)
    })
})
