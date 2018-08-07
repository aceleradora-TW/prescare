const saveRoute = require('./../../../src/routes/prescricao/save')

describe('Salvar prescricao', () => {
  const prescricao = { acolhido: jest.mock(), id: 1 }
  const Prescricao = { create: jest.fn().mockResolvedValue(prescricao) }
  
  const req = { params: { acolhido_id: 1 }, user: { tipo: 'foo' }, app: { locals: { parseData: jest.fn() } }, body: { validade: '09/07/1996' }, originalUrl: 'fooBarBaz' }
  const res = { redirect: jest.fn() }

  it('Deve chamar rota de save com os parametros certos', () => {
    saveRoute(Prescricao)(req, res)
      .then(() =>
        expect(Prescricao.create).toHaveBeenCalledWith({
          acolhido_id: req.params.acolhido_id,
          usuario: req.user.tipo,
          validade: req.app.locals.parseData(req.body.validade)
        })
      )
      .then(() =>
        expect(res.redirect).toHaveBeenCalledWith(
          req.originalUrl + '/' + prescricao.id + '/edit'
        )
      )
  })
})
