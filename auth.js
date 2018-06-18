const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy

module.exports = Usuario => {
    passport.use(new LocalStrategy({usernameField: "nome", passwordField: "senha"},
        (username, password, callback) => {
            Usuario.findOne({ where: { nome: username } }).then(user => {
                if (!user || user.senha != password) return callback(null, false)
                return callback(null, user)
            })
        }
    ))

    passport.serializeUser((user, callback) => {
        callback(null, user.id)
    })

    passport.deserializeUser((id, callback) => {
        Usuario.findOne({ where: { id: id } }).then(user => {
            callback(null, user)
        })
    })

    return passport
}
