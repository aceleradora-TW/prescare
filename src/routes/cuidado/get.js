module.exports = Cuidado => (req, res) => {
  return Cuidado
    .findOne({
      where: { id: req.params.cuidado_id }
    })
    .then(cuidado => {
<<<<<<< 43446e3957c3c385722d774f8a846717d5b31ead
=======
      if(!cuidado) res.redirect('404')
>>>>>>> :rocket: <@natymoraes , @diovanemendes> Cria botão salvar e voltar com link #23
      res.render('pages/editarCuidado', { cuidado })
    })
    .catch(err => console.log(err))
}
      res.render('pages/cuidados', { cuidado })
    })
    .catch(console.log)
}
