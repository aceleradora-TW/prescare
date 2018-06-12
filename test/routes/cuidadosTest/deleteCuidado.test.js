const cuidadoRoute = require('../../../src/routes/cuidado/destroy')

describe('Quando deleto cuidado', () => {
    it('Deve deletar informações dos cuidados', (done) => {
        const Cuidado = {
            destroy: jest.fn().mockResolvedValue()
        }
        const req = { params: { prescricaoId: 1, acolhidoId: 2, cuidadoId: 3 } }
        const res = { redirect: jest.fn() }               
        
        cuidadoRoute(Cuidado)(req, res)
        .then(() => expect(Cuidado.destroy).toBeCalledWith({"where" :{ "id": req.params.cuidadoId }} ))
        .then(() => expect(res.redirect).toBeCalledWith('/acolhido/2/prescricao/1/edit'))
        .then(done)
        .catch(done)
    })
})