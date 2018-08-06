const getAcolhido = require('../../../src/routes/acolhido/get')

describe('Quando acesso acolhido', () => {

  const Acolhido = {
    findOne: jest.fn()
  }

  const Prescricao = {whatever: 'whatever'}

  const req = {
    params: {
      acolhido_id: 1,
      prescricao_id: 25
    },
    urlOriginal: '/limbo',
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

  describe('Quando o acolhido nao existir', () => {
    it('Deve redirecionar para a pagina de not found atraves dos middlewares', (done) => {

      Acolhido.findOne.mockResolvedValue(undefined)

      getAcolhido(Acolhido, Prescricao)(req, res, next)
        .then(() => expect(next).toBeCalled())
        .then(done)
        .catch(done)
    })
  })

  describe('Quando houver um erro ao acessar o banco de dados', () => {
    it('Deve repassar o erro para o proximo middleware', (done) => {

      Acolhido.findOne.mockRejectedValue(new Error('Deu ruim'))

      getAcolhido(Acolhido, Prescricao)(req, res, next)
        .then(() => expect(next).toBeCalledWith(new Error('Deu ruim')))
        .then(done)
        .catch(done)
    })
  })

  describe('Quando o acolhido for encontrado com sucesso', () => {
    it('Deve mostrar pagina de detalhes do acolhido contendo as informacoes do acolhido encontrado', (done) => {

      const acolhido = {
        nome: 'Leo',
        prescricaos: [{
          id: 25,
          whatever: 'whatever'
        }]
      }

      Acolhido.findOne.mockResolvedValue(acolhido)

      getAcolhido(Acolhido, Prescricao)(req, res, next)
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
          tipoDoUsuario: 'clinica',
          prescricaoId: 25,
          prescricaos: acolhido.prescricaos,
          updateUrl: '/limbo'
        }))
        .then(done)
        .catch(done)
    })
  })
})
