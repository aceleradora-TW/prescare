module.exports = passport =>
    passport.authenticate("local", {
        failureFlash: true,
        successRedirect: "/lista-acolhidos",
        failureRedirect: "/login"
    });
