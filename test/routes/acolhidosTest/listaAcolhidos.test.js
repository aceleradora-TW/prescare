const listaAcolhidos = require('../../../src/routes/acolhido/listaAcolhidos')

describe('Quando acesso listaAcolhidos', () => {
  it('Deve mostrar uma lista de nomes', (done) => {

    const Acolhido = {
      findAll: jest.fn()
    }

    const model = {
      include: jest.fn()
    }

    const req = { user: { tipo:  'clinica' }}
    const res = { render: jest.fn() }
    const acolhidos = {
      id: '1',
      nome: 'Leo',
      prescricaos: [{
        id: 1,
        data: '2018-06-15',
        validade: '2018-06-08',
        acolhido_id: '1',
      }]
    }

    const prescricaos = acolhidos.prescricaos
    const tipoDoUsuario = req.user.tipo

    Acolhido.findAll.mockResolvedValue(acolhidos)
    model.include.mockResolvedValue(prescricaos)
        
    listaAcolhidos(Acolhido, model)(req,res)
      .then(() => expect(Acolhido.findAll).toBeCalledWith({
        order: [['nome', 'ASC'], [{ model }, 'validade', 'DESC']],
        include: [{ model, required: false, attributes: ['validade', 'updated_at']}]
      }))
      .then(() => expect(res.render).toBeCalledWith('pages/listaAcolhidos', { acolhidos, prescricaos, tipoDoUsuario }))
      .then(done)
      .catch(done)
  })})



