module.exports = Prescricao => (req, res) => {
  Prescricao.destroy({
    where: {
      id: req.params.prescricaoId
    }
  }).then(() => { console.log('Prescrição deletada.') })
}
