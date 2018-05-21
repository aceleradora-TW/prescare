const listChildren = (userArray) => (req, res) => { res.render('pages/listChildren', { users: userArray })}

module.exports = listChildren
