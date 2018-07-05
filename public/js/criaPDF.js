const aaa = require('../../src/routes/acolhido/get')

function getPrescription() {
    var acolhido = getAcolhido();
    var medicacoes = getMedicacoes();
    var medico = getMedico();

    var prescription = generatePrescription(acolhido, medicacoes, medico);

    return prescription;
}

function printPrescription() {
    console.log(aaa);
    
    createPdf(getPrescription()).open();
    // createPdf(  getPrescription() ).print({}, window);
}

function generatePrescription(acolhido, medicacoes, medico) {
    var footer = getFooter();
    var header = getHeader(acolhido);
    var medicacoes = getTabelaMedicacoes(medicacoes);
    var botton = getBotton(medico);

    var prescriptionToPrint = {
        footer: footer,
        content: [
            header,
            medicacoes,
            botton,
        ],
        defaultStyle: {
        }
    };

    return prescriptionToPrint;
}

//------------------------------BEGIN HEADER---------------------------------------------------------------------------------------------------------------------------------------------------------------------
function getHeader(acolhido) {

    var LOGO = getLogo(80);
    var TITLE = getTitle('Prescrição Médica');
    var TODAY = getCurrentDate();
    var ACOLHIDO_NOME = getAcolhidoNome(acolhido);
    var DADOS_ACOLHIDO = getDadosAcolhido(acolhido);

    var SPACE_COLUMN = { text: '', width: 10 };

    var header = {
        columns: [
            LOGO,
            SPACE_COLUMN,
            [
                TITLE,
                TODAY,
                ACOLHIDO_NOME,
                DADOS_ACOLHIDO
            ]
        ]
    };

    return header;
}


function getCurrentDate() {
    var todayText = "Porto Alegre, #DIA de #MES de #ANO.";
    var date = new Date();

    todayText = todayText.replace("#DIA", date.getDate());
    todayText = todayText.replace("#MES", date.toLocaleString("pt-br", { month: "long" }));
    todayText = todayText.replace("#ANO", date.getFullYear());

    var today = {
        text: todayText, fontSize: 12, margin: [0, 0, 0, 10], alignment: 'center'
    };
    return today;
}

function getTitle(message) {
    var title = {
        text: message, fontSize: 16, bold: true, margin: [0, 0, 0, 5], alignment: 'center'
    }
    return title;
}

function getAcolhidoNome(acolhido) {

    var nomeAcolhido = 'Nome Acolhido: ' + acolhido.nome;

    var name = {
        text: nomeAcolhido, fontSize: 14, bold: true, margin: [0, 5, 0, 5]
    }
    return name;
}

function getDadosAcolhido(acolhido) {

    var dadosAcolhido = 'Data de Nascimento: #dataNascimento   Sexo: #sexo';
    dadosAcolhido = dadosAcolhido.replace('#dataNascimento', acolhido.nascimento);
    dadosAcolhido = dadosAcolhido.replace('#sexo', acolhido.sexo)
    return dadosAcolhido;

}
//------------------------------END HEADER---------------------------------------------------------------------------------------------------------------------------------------------------------------------


//------------------------------BEGIN MEDICACOES---------------------------------------------------------------------------------------------------------------------------------------------------------------------
function getTabelaMedicacoes(medicacoes) {
    var tabelaMedicacoes = [];

    var title = [{ text: 'Medicamento', bold: true },
    { text: 'Dosagem', bold: true },
    { text: 'Via', bold: true },
    { text: 'Horario', bold: true }];

    tabelaMedicacoes.push(title);

    var i;
    for (i = 0; i < medicacoes.length; i++) {

        var medicacao = [medicacoes[i].nome, medicacoes[i].dosagem, medicacoes[i].via, medicacoes[i].horario];
        tabelaMedicacoes.push(medicacao);
    }

    var table = {
        table: {
            widths: ['*', 200, 30, 50],
            body: tabelaMedicacoes
        },
        margin: [0, 10, 0, 0]
    }

    return table;
}

//------------------------------END MEDICACOES---------------------------------------------------------------------------------------------------------------------------------------------------------------------


//------------------------------BEGIN BOTTON ---------------------------------------------------------------------------------------------------------------------------------------------------------------------
function getBotton(medico) {
    var Legenda = getLegenda();
    var dadosMedico = getDadosMedico(medico);
    var botton = {
        columns: [
            Legenda,
            dadosMedico
        ],
        margin: [0, 30, 0,],
    };
    return botton;
}

function getDadosMedico(medico) {
    var legenda = {
        table: {
            body: [
                [getLine(100)],
                [{ text: 'Dr(a). ' + medico.nome }],
                [{ text: 'Médico(a)', }],
                [{ text: 'CRM ' + medico.crm }],
            ]
        },
        layout: 'noBorders'
    }
    return legenda;
}

function getLegenda() {
    var legenda = {
        table: {
            body: [
                [{ text: 'Legenda da Via', bold: true }],
                [{ text: 'IM: Intramuscular', italics: true }],
                [{ text: 'SC: Subcutâneo', italics: true }],
                [{ text: 'SL: Sublingual', italics: true }],
                [{ text: 'SNE: Sonda Nasoenterica', italics: true }],
                [{ text: 'TQT: Traqueostomia', italics: true }],
                [{ text: 'UT: Uso Tópico', italics: true }],
                [{ text: 'VG: Gastrostomia', italics: true }],
                [{ text: 'VN: Nasal', italics: true }],
                [{ text: 'VO: Oral', italics: true }],
                [{ text: 'VR: Retal', italics: true }],
            ]
        },
        layout: 'noBorders'
    }
    return legenda;
}

//------------------------------END BOTTON---------------------------------------------------------------------------------------------------------------------------------------------------------------------


function getFooter() {
    var legenda = {
        table: {
            widths: ['*'],
            body: [
                [getLine(600)],
                [{ text: 'Rua Nelson Zang, 285 - Porto Alegre/RS Fone (51) 3315.0011   www.casadomenino.org.br', bold: true, alignment: 'center' }],
            ]
        },
        margin: [0, 10, 0, 10],
        layout: 'noBorders'
    }
    return legenda;
}

function getLine(width) {
    var line = {
        canvas: [
            {
                type: 'line',
                x1: 0,
                y1: 5,
                x2: width,
                y2: 5,
                lineWidth: 1
            }
        ]
    };
    return line;
}

//------------------------------mock---------------------------------------------------------------------------------------------------------------------------------------------------------------------

function getMedicacoes() {
    var A = { nome: "Paracetamol", dosagem: "50 gotas", via: "oral", horario: "8/8h" };
    var B = { nome: "Dipirona", dosagem: "30 gotas", via: "oral", horario: "6/6h" };
    var C = { nome: "Furosemida", dosagem: "1 cp", via: "oral", horario: "12/12h" };
    var D = { nome: "Omeprazol", dosagem: "1cp", via: "oral", horario: "continuo" };

    var medicacoes = [A, B, C, D, A, B, C, D, A, B, C, D, A, B, C, D];

    return medicacoes;
}

function getAcolhido(aaa) {
    var A = {
        nome: aaa.nome,
        nascimento: acolhido.nascimento,
        peso: acolhido.peso
    };
    return A;
}

function getMedico() {
    var A = { nome: "Maria da Silva", crm: "99999" };
    return A;
}


function getLogo(size) {
    var logo = {
        image: './img/logoSemFundo.png',
        width: size
    }
    return logo;
}