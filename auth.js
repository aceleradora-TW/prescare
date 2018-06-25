const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy

module.exports = (Usuario) => {
    passport.use(
        new LocalStrategy(
            { usernameField: "nome", passwordField: "senha" },
            (username, password, callback) => {
                Usuario
                    .findOne({ where: { nome: username, senha: password } })
                    .then(user =>
                        user
                            ? callback(null, user)
                            : callback(null, false, { message: 'Usuário ou senha inválidos' })
                    )
                    .catch(callback)
            }
        )
    )

    passport.serializeUser((user, callback) => callback(null, user.id))

    passport.deserializeUser((id, callback) => {
        Usuario
            .findOne({ where: { id: id } })
            .then(user => callback(null, user))
            .catch(callback)
    })

    return passport
}
