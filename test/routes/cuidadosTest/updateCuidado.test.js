const cuidadoRoute = require('../../../src/routes/cuidado/update')

describe('Quando acesso cuidado', () => {
    it('Deve atualizar informações dos cuidados', (done) => {
        const Cuidado = { findOne: jest.fn() }
        const req = { 
            params: { 
                cuidadoId: 1,
                acolhidoId: 1,
                prescricaoId: 1
            },
            body: {
                descricao: 'cuidado',
                intervalo: '8h - 8h',
                observacoes: 'nada', 
            }
        }
        const res = { redirect: jest.fn() }

        const cuidado = { id: 1, update: jest.fn() }
        
        Cuidado.findOne.mockResolvedValue(cuidado)
        cuidado.update.mockResolvedValue(req.body) 

        cuidadoRoute(Cuidado)(req, res)
        .then(() => expect(Cuidado.findOne).toBeCalledWith({'where': {'id': req.params.cuidadoId }}))
        .then(() => expect(cuidado.update).toBeCalledWith(req.body))
        .then(() => expect(res.redirect).toBeCalledWith('/acolhido/' + req.params.acolhidoId + '/prescricao/' + req.params.prescricaoId + '/edit'))
        .then(done)
        .catch(done)
    })
})
