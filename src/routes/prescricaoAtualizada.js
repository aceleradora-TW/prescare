const prescAtual = (table) => (req, res) => res.render('pages/prescricaoAtualizada', { tabelaFarmaceutica: table})

module.exports = prescAtual
