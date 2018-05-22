const prescr = require("../../src/routes/complementoFarmaceutica")

describe('Quando acesso a pagina da farmaceutica', () => {
    it('Deve mostrar uma prescricao com complementacoes', () => {
        const req = {}
        const res = {render : jest.fn()}
        const farmacia = [{ medicamentos: 'Busonide' }, { via: 'Oral' } ]
        
        prescr(farmacia)(req,res)
        
        expect(res.render).toBeCalledWith('pages/farmaceutica', { farmacia } )
    })
})

// {
//     medicamentos: 'Busonide 100mg',
//     via: 'Oral',
//     intervalo: '16-16h',
//     formaFarmaceutica: 'gotas',
//     horario:'8h 16h',
//     lote: '1234',
//     validade: '03/12/2019',
//     dispensacao: false,
// }