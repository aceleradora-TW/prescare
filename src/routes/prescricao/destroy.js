module.exports = Prescricao => (req, res) => {
  Prescricao.destroy({
    where: {
      id: req.params.PrescricaoId
    }
  }).then(() => { console.log('Prescrição deletada.') })
}
