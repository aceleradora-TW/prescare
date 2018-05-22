const farmaciaRota = require("../../src/routes/farmaceutica")

describe('Quando acesso farmaceutica', () => {
    it('Deve mostrar pagina com prescrição no formato da farmaceutica', () => {
        const req = {}
        const res = {render : jest.fn()}
        const farmacia = [{
            medicamentos: 'Paracetamol 500mg',
            via: 'Oral',
            intervalo: '8-8h',
            formaFarmaceutica: 'comprimido',
            horario:'8h 16h',
            lote: '1234',
            validade: '03/12/2019',
            dispensacao: false,
        } ]
        
        farmaciaRota(farmacia)(req,res)
        
        expect(res.render).toBeCalledWith('pages/farmaceutica', { farmacia })
    })
})