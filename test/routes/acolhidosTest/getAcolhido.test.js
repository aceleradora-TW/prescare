const acolhidoRoutes = require('../../../src/routes/acolhido/get')

describe('Quando acesso acolhido', () => {

  const Acolhido = {
    findOne: jest.fn()
  }

  const Prescricao = {whatever: 'whatever'}

  const req = {
    params: {
      acolhido_id: 1,
      prescricao_id: 1
    },
    urlOriginal: '',
    user: {
      tipo: 'clinica'
    }
  }

  const res = { render: jest.fn() }

  const next = jest.fn()

  beforeEach(() => {
    Acolhido.findOne.mockReset()
    res.render.mockReset()
    next.mockReset()
  })

  it('Deve mostrar pagina com prescrição e suas abas atualizaveis', (done) => {

    const acolhido = {
      nome: 'Leo',
      prescricaos: [{
        id: 1,
        data: '2018-06-15',
        validade: '2018-06-08',
        acolhido_id: '1'
      }]
    }

    Acolhido.findOne.mockResolvedValue(acolhido)

    acolhidoRoutes(Acolhido, Prescricao)(req, res, next)
      .then(() => expect(Acolhido.findOne).toBeCalledWith({
        where: {
          id: req.params.acolhido_id
        },
        include: [{
          model: Prescricao,
          required: false,
          where: {
            acolhido_id: req.params.acolhido_id
          }
        }]
      }))
      .then(() => expect(res.render).toBeCalledWith('pages/infoAcolhido', {
        acolhido,
        tipoDoUsuario: req.user.tipo,
        prescricaoId: req.params.prescricao_id,
        prescricaos: acolhido.prescricaos,
        updateUrl: req.urlOriginal
      }))
      .then(done)
      .catch(done)
  })
})
