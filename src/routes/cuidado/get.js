module.exports = Cuidado => (req, res) => {
  return Cuidado
    .findOne({
      where: { id: req.params.cuidado_id }
    })
    .then(cuidado => {
      res.render('pages/editarCuidado', { cuidado })
    })
    .catch(err => console.log(err))
}
      res.render('pages/cuidados', { cuidado })
    })
    .catch(console.log)
}
