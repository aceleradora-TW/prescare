module.exports = Prescricao => (req, res) => {
  Prescricao.destroy({
    where: {
      id: req.params.prescricao_id
    }
<<<<<<< 171465b2402194b45c2b3190e5b3d7c49ab354f0
<<<<<<< 28c44a131d5f46c9046f463373cff507e213195c
<<<<<<< 5c9392b050fdc52720a9e13aff86ccb692f52b88
  }).then(() => { console.log('Prescrição deletada.') })
=======
  }).then(() => { 
    res.render('pages/editarPrescricao', { prescricao, updateUrl: req.originalUrl })
=======
=======
  })
  .then(prescricao => { 
    res.redirect('/acolhido/' + req.params.acolhido_id)
>>>>>>> :rocket: <@murilobauerc, @alineabich, @DiovaneMendes> implementa fluxo
  })
  .then(prescricao => { 
    if(!prescricao) res.render('/404')

    // res.render('pages/editarPrescricao', { prescricao, updateUrl: req.originalUrl })
    res.render('pages/info', { acolhido, presc: prescricao})
>>>>>>> :rocket: <@murilobauerc, @ilizakoski> funciona botao voltar e botao excluir
    })
>>>>>>> :rocket: <@ilizakoski, @murilobauerc> Excluir a prescrição
}
