module.exports = Prescricao => (req, res) => {
  Prescricao.destroy({
    where: {
      id: req.params.prescricao_id
    }
  }).then(() => { console.log('Prescrição deletada.') })
}
