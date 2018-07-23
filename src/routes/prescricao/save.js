const moment = require('moment')
const FORMATO_DATA = 'DD/MM/YYYY'

module.exports = Prescricao => (req, res) => {
  return Prescricao
    .create({
      acolhido_id: req.params.acolhido_id,
      usuario: req.user.tipo,
      validade: moment(req.body.validade, FORMATO_DATA),
      data: new Date().getTime()
    }).then(prescricao => {
      res.redirect(req.originalUrl + '/' + prescricao.id + '/edit')
    })
    .catch(() => res.redirect('/404'))
}