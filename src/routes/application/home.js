module.exports = () => (req, res) => {
    res.render('pages/home', { nome: req.nome })
}