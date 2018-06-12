const cuidadoRoute = require('../../src/routes/cuidado/get')

describe('Quando acesso cuidado', () => {
    it('Deve mostrar página com informações dos cuidados', (done) => {
        const Cuidado = {
            findOne: jest.fn()
        }
        const req = { params: { cuidadeId: 1 }}
        const res = { render: jest.fn() }
        const cuidado = {
            id: 1,
            descricao: 'cuidado',
            intervalo: '8h - 8h',
            observacoes: 'nada'
        }

        Cuidado.findOne.mockResolvedValue(cuidado)

        return cuidadoRoute(Cuidado)(req, res)
        .then(() => expect(Cuidado.findOne).toBeCalledWith({'where': {'id': req.params.cuidadoId }}))
        .then(() => expect(res.render).toBeCalledWith('pages/editarCuidado', { cuidado }))
        .then(done)
        .catch(done)
    })
})
