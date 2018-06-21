const moment = require('moment')

const FORMATO_DATA = 'DD/MM/YYYY'

module.exports = Prescricao => (req, res) => {

  const dataValidade = moment(req.body.validade, FORMATO_DATA)
  
  Prescricao.findOne({
    where: {
      id: req.params.prescricao_id
    },
  }).then(prescricao => {
    prescricao.update({
      data: new Date().getTime(),
      validade: dataValidade.toDate()
    })
    .then(() => {
      res.redirect(req.originalUrl)
    })
    .catch((error) => {
      console.log(error.message);
      res.send("Morreu")
    })
  })
}