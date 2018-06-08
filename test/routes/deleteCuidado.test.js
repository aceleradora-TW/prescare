const cuidadoRoute = require('../../src/routes/cuidado/destroy')

describe('Quando deleto cuidado', () => {
    it('Deve deletar informações dos cuidados', (done) => {
        const Cuidado = {
            destroy: jest.fn()
        }
        const req = { params: { prescricao_id: 1 }, originalUrl: '/acolhido/1/prescricao/1/cuidado' }
        const res = { redirect: jest.fn() }
                
        Cuidado.destroy.mockResolvedValue()
        
        return cuidadoRoute(Cuidado)(req, res)
        .then(() => expect(Cuidado.destroy).toBeCalledWith(req.params))
        .then(() => expect(res.redirect).toBeCalledWith(req.originalUrl + '/2/edit'))
        .then(done)
        .catch(done)
    })
})