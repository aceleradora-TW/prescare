const prescricaoAtual = (listaPrescricoes) => (req, res) => res.render('pages/prescricaoAtualizada', { listaPrescricoes: listaPrescricoes })

module.exports = prescricaoAtual
