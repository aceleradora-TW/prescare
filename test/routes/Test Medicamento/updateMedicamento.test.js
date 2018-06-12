const medicamentoRoute = require("../../../src/routes/medicamento/update")

describe('Quando acesso Medicamentos', () => {
    it('Deve atualizar informações dos Medicamentos', (done) => {
        const Medicamento = { findOne: jest.fn() }
        const req = {
            params: {
                medicamentoId: 1,
                acolhidoId: 1,
                prescricaoId: 1
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

        const medicamento = { id: 1,
             update: jest.fn() 
            }
     
        Medicamento.findOne.mockResolvedValue(medicamento)
        medicamento.update.mockResolvedValue(req.body)

        medicamentoRoute(Medicamento)(req, res)
        .then(() => expect(Medicamento.findOne).toBeCalledWith({'where': {'id': req.params.medicamentoId }}))
        .then(() => expect(medicamento.update).toBeCalledWith(req.body))
        .then(() => expect(res.redirect).toBeCalledWith('/acolhido/' + req.params.acolhidoId + '/prescricao/' + req.params.prescricaoId + '/edit'))
        .then(done)
        .catch(done)
    })
})
