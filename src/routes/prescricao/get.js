module.exports = (Prescricao, Usuario) => (req, res) => {
  return Prescricao.findOne({
    where: {
      id: req.params.id
    }
  }).then(prescricao => {
    if (!prescricao) {
      return res.render('pages/error')
    }

    let tipoDoUsuario = req.user.tipo
    
    if (tipoDoUsuario === 'clinica') {
      res.render('pages/prescricao', { prescricao })
    }

    if (tipoDoUsuario === 'neuro') {
      res.render('pages/prescricao', { prescricao })
    }

    if (tipoDoUsuario == 'farmacia') {
      res.render('pages/farmacia/editarPrescricaoFarmaceutica')
    }
  }).catch(err => console.log(err))
}