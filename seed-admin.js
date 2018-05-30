module.exports = User => User.findOrCreate({ where: { username: 'admin' }, defaults: { username: 'admin', password: 'admin' } }).then(console.log('Usuário admin está presente'))
