module.exports = Cuidado => (req, res) => {
  return Cuidado
    .findOne({
      where: { id: req.params.cuidado_id }
    })
    .then(cuidado => {
<<<<<<< bb21fa6d6124ad7e0079c387520d5dcf259fc62e
      if(!cuidado) res.redirect('404')
      res.render('pages/editarCuidado', { cuidado })
    })
    .catch(err => console.log(err))
}
=======
      res.render('pages/cuidados', { cuidado })
    })
    .catch(console.log)
}
>>>>>>> :rocket: <@natymoraes , @diovanemendes> Cria botão salvar e voltar com link #23
