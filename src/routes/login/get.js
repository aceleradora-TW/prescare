const login = () => (req, res) => res.render('pages/login' , { message: req.flash('loginMessage') })
    // render the page and pass in any flash data if it exists

module.exports = login