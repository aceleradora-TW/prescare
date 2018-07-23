const query = (Acolhido, Prescricao) => {
  const NOME_ACOLHIDO_ASC = ['nome', 'ASC']
  const VALIDADE_PRESCRICAO_DESC = [{ model: Prescricao }, 'validade', 'DESC']

  const order = [
    NOME_ACOLHIDO_ASC,
    VALIDADE_PRESCRICAO_DESC
  ]

  const include = [{
    model: Prescricao,
    required: false,
    attributes: ['validade', 'updated_at']
  }]

  return Acolhido.findAll({ order, include })
}

const render = (req, res) => (acolhidos) => res.render('pages/listaAcolhidos', {
  acolhidos,
  prescricaos: acolhidos.prescricaos,
  tipoDoUsuario: req.user.tipo
})

module.exports = (Acolhido, Prescricao) => (req, res, next) =>
  query(Acolhido, Prescricao)
    .then(render(req, res))
    .catch(next)
