module.exports = passport =>
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login"
  });
