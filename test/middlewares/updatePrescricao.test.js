const updatePrescricao = require('./../../src/middlewares/updatePrescricao')

describe('Atualiza prescrição middleware', () => {
  const prescricao = { changed: jest.fn(), save: jest.fn().mockResolvedValue() }
  const Prescricao = { findOne: jest.fn().mockResolvedValue(prescricao) }

  const req = { params: { prescricao_id: 2 } }
  const res = jest.mock()

  it('Deve alterar changed_at e salvar na prescricao', done => {
    updatePrescricao(Prescricao)(req, res)
      .then(() => expect(Prescricao.findOne).toHaveBeenCalledWith( { where: { id: req.params.prescricao_id } } ))
      .then(() => expect(prescricao.changed).toHaveBeenCalledWith('updated_at', true))
      .then(() => expect(prescricao.save).toHaveBeenCalled())
      .then(done)
      .catch(done)
  })
})
