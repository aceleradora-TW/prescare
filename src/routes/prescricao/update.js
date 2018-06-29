const moment = require('moment')

const FORMATO_DATA = 'DD/MM/YYYY'

module.exports = Prescricao => (req, res) => {
  return Prescricao.findOne({
    where: {
      id: req.params.prescricao_id
    },
  })
    .then(prescricao => {
      prescricao.update(req.body)
        .then(() => {
          res.redirect(req.originalUrl)
        })
        .catch((error) => {
          console.log(error.message);
          res.redirect('/404')
        })
    })
}