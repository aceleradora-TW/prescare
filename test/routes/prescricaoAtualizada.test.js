const prescricaoAtualizadaRoute = require("../../src/routes/prescricaoAtualizada")

describe('Quando acesso prescricção Atualizada', () => {
    it('Deve mostrar pagina com prescrição Atualizada', () => {
        const req = {}
        const res = { render: jest.fn() }
        const tabelaFarmaceutica = [{
            name: 'Afonso',
            farm: [{
                medicamentos: 'Paracetamol 500mg',
                via: 'Oral',
                intervalo: '8-8h',
                formaFarmaceutica: 'comprimido',
                horario: '8h 16h',
                lote: '1234',
                validade: '03/12/2019',
                dispensacao: false
            }]
        }]

        prescricaoAtualizadaRoute(tabelaFarmaceutica)(req, res)

        expect(res.render).toBeCalledWith('pages/prescricaoAtualizada', { tabelaFarmaceutica })
    })
})