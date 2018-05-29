var prescisao = [
    { value: 'Pomada', data: 'PO' },
    { value: 'Lindice', data: 'LI' },
    { value: 'Ismael', data: 'IS' },
    { value: 'Remedio', data: 'RE' }
 ];

 //Puxar os dados em array(acima)
 $('#campo-pesquisa').autocomplete({
    lookup: prescisao,
});

//Puxar os dados em banco de dados
// $('#campo-pesquisa').autocomplete({
//     serviceUrl: '/prescicao',
// });