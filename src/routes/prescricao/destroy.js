module.exports = Prescricao => (req, res) => {
  Prescricao.destroy({
    where: {
      id: req.params.id
    }
  }).then(() => { console.log('Prescrição destruida.') })
}
