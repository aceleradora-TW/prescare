module.exports = Dieta => (req, res) => {
<<<<<<< 4ceb3e6f2628cf69977b01f73989c0fd4c03f377
    return Dieta.destroy({
=======
    return Dieta
    .destroy({
>>>>>>> :rocket: <@camirmarques, @ClaudiaStrm> adiciona funcionalidade de excluir itens da prescricao #25
        where: {
            id: req.params.dieta_id
        }
    }).then(() => {
        res.redirect('/acolhido/' + req.params.acolhido_id + '/prescricao/' + req.params.prescricao_id + '/edit')
    })
}