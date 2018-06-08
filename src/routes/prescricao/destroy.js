module.exports = Prescricao => (req, res) => {
  Prescricao.destroy({
    where: {
      id: req.params.prescricao_id
    }
<<<<<<< 28c44a131d5f46c9046f463373cff507e213195c
<<<<<<< 5c9392b050fdc52720a9e13aff86ccb692f52b88
  }).then(() => { console.log('Prescrição deletada.') })
=======
  }).then(() => { 
    res.render('pages/editarPrescricao', { prescricao, updateUrl: req.originalUrl })
=======
  })
  .then(prescricao => { 
    if(!prescricao) res.render('/404')

    // res.render('pages/editarPrescricao', { prescricao, updateUrl: req.originalUrl })
    res.render('pages/info', { acolhido, presc: prescricao})
>>>>>>> :rocket: <@murilobauerc, @ilizakoski> funciona botao voltar e botao excluir
    })
>>>>>>> :rocket: <@ilizakoski, @murilobauerc> Excluir a prescrição
}
