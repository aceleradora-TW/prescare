module.exports = Prescricao => (req, res) => {
  Prescricao.destroy({
    where: {
      id: req.params.prescricao_id
    }
<<<<<<< 5c9392b050fdc52720a9e13aff86ccb692f52b88
  }).then(() => { console.log('Prescrição deletada.') })
=======
  }).then(() => { 
    res.render('pages/editarPrescricao', { prescricao, updateUrl: req.originalUrl })
    })
>>>>>>> :rocket: <@ilizakoski, @murilobauerc> Excluir a prescrição
}
