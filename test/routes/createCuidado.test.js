const cuidadoRoute = require('../../src/routes/cuidado/create')

describe('Quando acesso cuidado', () => {
    it('Deve criar página com informações dos cuidados', (done) => {
        const Cuidado = {
            create: jest.fn()
        }
        const req = { params: { prescricao_id: 1 }, originalUrl: '/acolhido/1/prescricao/1/cuidado/' }
        const res = { redirect: jest.fn() }
                
        Cuidado.create.mockResolvedValue(req.params)
        
        return cuidadoRoute(Cuidado)(req, res)
        .then(() => expect(Cuidado.create).toBeCalledWith(req.params))
        .then(() => expect(res.redirect).toBeCalledWith(  req.originalUrl + '2/edit'))
        .then(done)
        .catch(done)
    })
})
