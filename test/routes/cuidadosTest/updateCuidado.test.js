const cuidadoRoute = require('../../../src/routes/cuidado/update')

describe('Quando acesso cuidado', () => {
    it('Deve atualizar informações dos cuidados', (done) => {

        const cuidado = { id: 1, update: jest.fn().mockResolvedValue() }
        const Cuidado = { findOne: jest.fn().mockResolvedValue(cuidado) }
        const req = { 
            params: { 
                cuidado_id: 1,
                acolhido_id: 2,
                prescricao_id: 3
            },
            body: {
                descricao: 'cuidado',
                intervalo: '8h - 8h',
                observacoes: 'nada', 
            }
        }
        const res = { redirect: jest.fn() }

        cuidadoRoute(Cuidado)(req, res)
        .then(() => expect(Cuidado.findOne).toBeCalledWith({'where': {'id': req.params.cuidado_id }}))
        .then(() => expect(cuidado.update).toBeCalledWith(req.body))
        .then(() => expect(res.redirect).toBeCalledWith('/acolhido/2/prescricao/3/edit'))
        .then(done)
        .catch(done)
    })
})
