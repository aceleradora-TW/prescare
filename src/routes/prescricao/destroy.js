module.exports = Prescricao => (req, res) => {
  Prescricao.destroy({
    where: {
      id: req.params_id
    }
  }).then(() => { console.log('Prescrição destruida.') })
}
