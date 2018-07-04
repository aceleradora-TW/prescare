const novoAcolhido = (user) => (req, res) => res.render('pages/novoAcolhido', { usuario: user})

module.exports = novoAcolhido