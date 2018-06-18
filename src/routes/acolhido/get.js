module.exports = (Acolhido, Prescricao) => (req, res) => {  
  return Acolhido.findOne({
   where: {
     id: req.params.acolhido_id
    },
    include: [{ model: Prescricao,  where: {acolhido_id: req.params.acolhido_id }}]
   
 }).then(acolhido => {
   res.render('pages/infoAcolhido', { 
     prescricaoId: req.params.prescricao_id,
     acolhido, 
     prescricaos: acolhido.prescricaos, 
     updateUrl : req.urlOriginal 
   })
 }).catch(err => console.log(err))  

}