const cuidadoRoute = require('../../src/routes/cuidado/update')

describe('Quando acesso cuidado', () => {
    it('Deve atualizar informações dos cuidados', (done) => {
        const Cuidado = { findOne: jest.fn() }
        const req = { 
            params: { 
                cuidado_id: 1,
                acolhido_id: 1,
                prescricao_id: 1
            },
            body: {
                descricao: 'cuidado',
                intervalo: '8h - 8h',
                observacoes: 'nada', 
            }
        }
        const res = { redirect: jest.fn() }

        const cuidado = { id: 1, update: jest.fn() }
        const novoCuidado = { 
            descricao: req.body.descricao,
            intervalo: req.body.intervalo,
            observacoes: req.body.observacoes
        }
      
        Cuidado.findOne.mockResolvedValue(cuidado)
        cuidado.update.mockResolvedValue(novoCuidado) 

        return cuidadoRoute(Cuidado)(req, res)
        .then(() => expect(Cuidado.findOne).toBeCalledWith({'where': {'id': req.params.cuidado_id }}))
        .then(() => expect(cuidado.update).toBeCalledWith(novoCuidado))
        .then(() => expect(res.redirect).toBeCalledWith('/acolhido/' + req.params.acolhido_id + '/prescricao/' + req.params.prescricao_id + '/edit'))
        .then(done)
        .catch(done)
    })
})
