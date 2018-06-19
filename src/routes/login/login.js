module.exports = passport =>
    passport.authenticate("local", {
<<<<<<< 8e955059a2a3038c1ce288eac9f5a8bad5a024e2
        failureFlash: true,
        successRedirect: "/lista-acolhidos",
        failureRedirect: "/login"
    });
=======
    failureFlash: true,
    successRedirect: "/lista-acolhidos",
    failureRedirect: "/login"
  });
>>>>>>> :rocket: <@natymoraes, @ilizakoski> Implementar login
