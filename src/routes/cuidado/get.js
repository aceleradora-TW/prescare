module.exports = Cuidado => (req, res) => {
  return Cuidado
    .findOne({
      where: { id: req.params.cuidado_id }
    })
    .then(cuidado => {
<<<<<<< 7f510171be8c4fb52ae3bf5c2c2ef17ae5bb0301
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
=======
      if(!cuidado) res.redirect('404')
      
      res.render('pages/editarCuidado', { cuidado })
    })
    .catch(err => console.log(err))
}
>>>>>>> :rocket: <@Claudiastrm, @DiovaneMendes> Adiciona CRUD cuidados #23
