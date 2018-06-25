module.exports = () => (req, res) => {
    req.logout()
    req.session.destroy(function (err) {
        res.redirect('/login')
    });
}