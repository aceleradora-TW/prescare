const LocalStrategy = require('passport-local').Strategy

module.exports = (Usuario, passport) => {
    passport.use(new LocalStrategy(
        (nome, senha, callback) => {
            Usuario.findOne({ where: { nome: nome } }).then(usuario => {
                if (!usuario || usuario.senha != senha) return callback(null, false)
                return callback(null, usuario)
            })
        }
    ))

    passport.serializeUser((usuario, callback) => {
        callback(null, usuario.id)
    })

    passport.deserializeUser((id, callback) => {
        Usuario.findOne({ where: { id: id } }).then(usuario => {
            callback(null, usuario)
        })
    })
}
