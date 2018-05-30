const LocalStrategy = require('passport-local').Strategy

module.exports = (User, passport) => {
  passport.use(new LocalStrategy(
    (username, password, callback) => {
      User.findOne({ where: { username: username }}).then(user => {
        if(!user || user.password != password) return callback(null, false)
        return callback(null, user)
      })
    }
  ))

  passport.serializeUser((user, callback) => {
    callback(null, user.id)
  })

  passport.deserializeUser((id, callback) => {
    User.findOne({ where: { id: id } }).then(user => {
      callback(null, user)
    })
  })
}
