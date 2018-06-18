module.exports = () => (req, res) => {
    console.log('bati aqui')
    res.render('pages/login', { message: req.flash('loginMessage') })
}