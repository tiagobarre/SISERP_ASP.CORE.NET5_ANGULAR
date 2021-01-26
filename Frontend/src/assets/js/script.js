
/*Função limpar campos dos formulários*/

function Limpar() {

    document.getElementById('visor').value = "";
    document.getElementById('visor2').value = "";
    document.getElementById('visor3').value = "";
    document.getElementById('visor4').value = "";
    document.getElementById('visor5').value = "";
    document.getElementById('visor6').value = "";
    document.getElementById('visor7').value = "";
    document.getElementById('visor7').innerHTML = "";
    document.getElementById('titulo').value = "";
    document.getElementById('comentario').value = "";
    document.getElementById('caracteres').innerHTML = "";
    document.getElementById('data_cadastro').value = "";
    document.getElementById('horainiciallivro').value = "";
    document.getElementById('horafinallivro').value = "";


}

function LimparRel() {
    document.getElementById('nomerelatorio').value = "";

    document.getElementById('protocolorel').value = "";
    document.getElementById('datainicialrel').value = "";
    document.getElementById('datafinalrel').value = "";
}

function LimparRat2() {
    document.getElementById('nomerat2').value = "";

    document.getElementById('protocolorat2').value = "";
    document.getElementById('datainicialrat2').value = "";
    document.getElementById('datafinalrat2').value = "";
}

/*-----------------------------------------------------------------------
   Máscara para o campo data dd/mm/aaaa hh:mm:ss
   Exemplo: <input maxlength="16" name="datahora" onKeyPress="DataHora(event, this)">
   -----------------------------------------------------------------------*/
function DataHora(evento, objeto) {
    var keypress = (window.event) ? event.keyCode : evento.which;
    campo = eval(objeto);
    if (campo.value == '00/00/0000 00:00') {
        campo.value = ""
    }

    caracteres = '0123456789';
    separacao1 = '/';
    separacao2 = ' ';
    separacao3 = ':';
    conjunto1 = 2;
    conjunto2 = 5;
    conjunto3 = 10;
    conjunto4 = 13;
    conjunto5 = 16;
    if ((caracteres.search(String.fromCharCode(keypress)) != -1) && campo.value.length < (16)) {
        if (campo.value.length == conjunto1)
            campo.value = campo.value + separacao1;
        else if (campo.value.length == conjunto2)
            campo.value = campo.value + separacao1;
        else if (campo.value.length == conjunto3)
            campo.value = campo.value + separacao2;
        else if (campo.value.length == conjunto4)
            campo.value = campo.value + separacao3;
        else if (campo.value.length == conjunto5)
            campo.value = campo.value + separacao3;
    }
    else
        event.returnValue = false;
}



/*Função para imprimir RAT*/
document.getElementById('btnImprimir').onclick = function () {
    var conteudo = document.getElementById('formularioRAT').innerHTML
    var basic_checkbox_1 = document.getElementById('basic_checkbox_1').checked;
    var basic_checkbox_2 = document.getElementById('basic_checkbox_2').checked;
    var basic_checkbox_3 = document.getElementById('basic_checkbox_3').checked;
    var basic_checkbox_4 = document.getElementById('basic_checkbox_4').checked;

    var basic_checkbox_6 = document.getElementById('basic_checkbox_6').checked;
    var basic_checkbox_7 = document.getElementById('basic_checkbox_7').checked;
    var basic_checkbox_8 = document.getElementById('basic_checkbox_8').checked;
    var basic_checkbox_9 = document.getElementById('basic_checkbox_9').checked;
    var basic_checkbox_10 = document.getElementById('basic_checkbox_10').checked;
    var basic_checkbox_11 = document.getElementById('basic_checkbox_11').checked;
    var basic_checkbox_12 = document.getElementById('basic_checkbox_12').checked;
    var basic_checkbox_13 = document.getElementById('basic_checkbox_13').checked;
    var basic_checkbox_14 = document.getElementById('basic_checkbox_14').checked;
    var basic_checkbox_15 = document.getElementById('basic_checkbox_15').checked;
    var basic_checkbox_16 = document.getElementById('basic_checkbox_16').checked;
    var basic_checkbox_17 = document.getElementById('basic_checkbox_17').checked;
    var basic_checkbox_18 = document.getElementById('basic_checkbox_18').checked;
    var basic_checkbox_19 = document.getElementById('basic_checkbox_19').checked;
    var basic_checkbox_20 = document.getElementById('basic_checkbox_20').checked;
    var basic_checkbox_21 = document.getElementById('basic_checkbox_21').checked;
    var basic_checkbox_22 = document.getElementById('basic_checkbox_22').checked;
    var basic_checkbox_23 = document.getElementById('basic_checkbox_23').checked;
    var basic_checkbox_24 = document.getElementById('basic_checkbox_24').checked;
    var basic_checkbox_25 = document.getElementById('basic_checkbox_25').checked;
    var basic_checkbox_26 = document.getElementById('basic_checkbox_26').checked;
    var basic_checkbox_27 = document.getElementById('basic_checkbox_27').checked;
    var basic_checkbox_28 = document.getElementById('basic_checkbox_28').checked;
    var basic_checkbox_29 = document.getElementById('basic_checkbox_29').checked;
    var basic_checkbox_30 = document.getElementById('basic_checkbox_30').checked;
    var basic_checkbox_31 = document.getElementById('basic_checkbox_31').checked;
    var basic_checkbox_32 = document.getElementById('basic_checkbox_32').checked;
    var basic_checkbox_33 = document.getElementById('basic_checkbox_33').checked;
    var basic_checkbox_34 = document.getElementById('basic_checkbox_34').checked;
    var basic_checkbox_35 = document.getElementById('basic_checkbox_35').checked;
    var basic_checkbox_36 = document.getElementById('basic_checkbox_36').checked;
    var basic_checkbox_37 = document.getElementById('basic_checkbox_37').checked;
    var basic_checkbox_38 = document.getElementById('basic_checkbox_38').checked;
    var basic_checkbox_39 = document.getElementById('basic_checkbox_39').checked;
    var basic_checkbox_40 = document.getElementById('basic_checkbox_40').checked;



    var inputRatNome = document.getElementById('inputRatNome').value
    var inputRatSetor = document.getElementById('inputRatSetor').value
    var inputRatMatricula = document.getElementById('inputRatMatricula').value
    var inputRatIdade = document.getElementById('inputRatIdade').value
    var inputRatFuncao = document.getElementById('inputRatFuncao').value
    var inputRatDataAdmissao = document.getElementById('inputRatDataAdmissao').value
    var inputRatEmpresa = document.getElementById('inputRatEmpresa').value

    var inputRatAcidente = document.getElementById('inputRatAcidente').value
    var inputRatAtividadeAcidente = document.getElementById('inputRatAtividadeAcidente').value
    var inputRatDataAcidente = document.getElementById('inputRatDataAcidente').value
    var inputRatHoraAcidente = document.getElementById('inputRatHoraAcidente').value
    var inputRatTempoFuncao = document.getElementById('inputRatTempoFuncao').value

    var TextInputDescAcidente = document.getElementById('TextInputDescAcidente').value
    var TextInputAnaliseAcidente = document.getElementById('TextInputAnaliseAcidente').value
    var TextInputCausaAcidente = document.getElementById('TextInputCausaAcidente').value
    var TextInputAcaoAcidente = document.getElementById('TextInputAcaoAcidente').value
    var inputRatMatriculaSegrin = document.getElementById('inputRatMatriculaSegrin').value
    var inputRatNomeSegrin = document.getElementById('inputRatNomeSegrin').value
    var TextInputConclusaoCipa = document.getElementById('TextInputConclusaoCipa').value
    var inputRatNomeCipa = document.getElementById('inputRatNomeCipa').value
    var inputDataCipa = document.getElementById('inputDataCipa').value

    var inputRatOutros = document.getElementById('inputRatOutros').value
    var inputRatTecnicoEnfermagem = document.getElementById('inputRatTecnicoEnfermagem').value
    var inputRatTestemunha1 = document.getElementById('inputRatTestemunha1').value
    var inputRatTestemunha2 = document.getElementById('inputRatTestemunha2').value


    tela_impressao = window.open('about:blank');


    tela_impressao.document.write(conteudo);


    tela_impressao.document.getElementById('basic_checkbox_1').checked = basic_checkbox_1;
    tela_impressao.document.getElementById('basic_checkbox_2').checked = basic_checkbox_2;
    tela_impressao.document.getElementById('basic_checkbox_3').checked = basic_checkbox_3;
    tela_impressao.document.getElementById('basic_checkbox_4').checked = basic_checkbox_4;
    tela_impressao.document.getElementById('basic_checkbox_6').checked = basic_checkbox_6;
    tela_impressao.document.getElementById('basic_checkbox_7').checked = basic_checkbox_7;
    tela_impressao.document.getElementById('basic_checkbox_8').checked = basic_checkbox_8;
    tela_impressao.document.getElementById('basic_checkbox_9').checked = basic_checkbox_9;
    tela_impressao.document.getElementById('basic_checkbox_10').checked = basic_checkbox_10;
    tela_impressao.document.getElementById('basic_checkbox_11').checked = basic_checkbox_11;
    tela_impressao.document.getElementById('basic_checkbox_12').checked = basic_checkbox_12;
    tela_impressao.document.getElementById('basic_checkbox_13').checked = basic_checkbox_13;
    tela_impressao.document.getElementById('basic_checkbox_14').checked = basic_checkbox_14;
    tela_impressao.document.getElementById('basic_checkbox_15').checked = basic_checkbox_15;
    tela_impressao.document.getElementById('basic_checkbox_16').checked = basic_checkbox_16;
    tela_impressao.document.getElementById('basic_checkbox_17').checked = basic_checkbox_17;
    tela_impressao.document.getElementById('basic_checkbox_18').checked = basic_checkbox_18;
    tela_impressao.document.getElementById('basic_checkbox_19').checked = basic_checkbox_19;
    tela_impressao.document.getElementById('basic_checkbox_20').checked = basic_checkbox_20;
    tela_impressao.document.getElementById('basic_checkbox_21').checked = basic_checkbox_21;
    tela_impressao.document.getElementById('basic_checkbox_22').checked = basic_checkbox_22;
    tela_impressao.document.getElementById('basic_checkbox_23').checked = basic_checkbox_23;
    tela_impressao.document.getElementById('basic_checkbox_24').checked = basic_checkbox_24;
    tela_impressao.document.getElementById('basic_checkbox_25').checked = basic_checkbox_25;
    tela_impressao.document.getElementById('basic_checkbox_26').checked = basic_checkbox_26;
    tela_impressao.document.getElementById('basic_checkbox_27').checked = basic_checkbox_27;
    tela_impressao.document.getElementById('basic_checkbox_28').checked = basic_checkbox_28;
    tela_impressao.document.getElementById('basic_checkbox_29').checked = basic_checkbox_29;
    tela_impressao.document.getElementById('basic_checkbox_30').checked = basic_checkbox_30;
    tela_impressao.document.getElementById('basic_checkbox_31').checked = basic_checkbox_31;
    tela_impressao.document.getElementById('basic_checkbox_32').checked = basic_checkbox_32;
    tela_impressao.document.getElementById('basic_checkbox_33').checked = basic_checkbox_33;
    tela_impressao.document.getElementById('basic_checkbox_34').checked = basic_checkbox_34;
    tela_impressao.document.getElementById('basic_checkbox_35').checked = basic_checkbox_35;
    tela_impressao.document.getElementById('basic_checkbox_36').checked = basic_checkbox_36;
    tela_impressao.document.getElementById('basic_checkbox_37').checked = basic_checkbox_37;
    tela_impressao.document.getElementById('basic_checkbox_38').checked = basic_checkbox_38;
    tela_impressao.document.getElementById('basic_checkbox_39').checked = basic_checkbox_39;
    tela_impressao.document.getElementById('basic_checkbox_40').checked = basic_checkbox_40;



    tela_impressao.document.getElementById('inputRatNome').value = inputRatNome;

    tela_impressao.document.getElementById('inputRatSetor').value = inputRatSetor;
    tela_impressao.document.getElementById('inputRatMatricula').value = inputRatMatricula;
    tela_impressao.document.getElementById('inputRatIdade').value = inputRatIdade;
    tela_impressao.document.getElementById('inputRatFuncao').value = inputRatFuncao;
    tela_impressao.document.getElementById('inputRatDataAdmissao').value = inputRatDataAdmissao;
    tela_impressao.document.getElementById('inputRatEmpresa').value = inputRatEmpresa;

    tela_impressao.document.getElementById('inputRatAcidente').value = inputRatAcidente;
    tela_impressao.document.getElementById('inputRatAtividadeAcidente').value = inputRatAtividadeAcidente;
    tela_impressao.document.getElementById('inputRatDataAcidente').value = inputRatDataAcidente;
    tela_impressao.document.getElementById('inputRatHoraAcidente').value = inputRatHoraAcidente;
    tela_impressao.document.getElementById('inputRatTempoFuncao').value = inputRatTempoFuncao;

    tela_impressao.document.getElementById('TextInputDescAcidente').value = TextInputDescAcidente;
    tela_impressao.document.getElementById('TextInputAnaliseAcidente').value = TextInputAnaliseAcidente;
    tela_impressao.document.getElementById('TextInputCausaAcidente').value = TextInputCausaAcidente;
    tela_impressao.document.getElementById('TextInputAcaoAcidente').value = TextInputAcaoAcidente;
    tela_impressao.document.getElementById('inputRatMatriculaSegrin').value = inputRatMatriculaSegrin;
    tela_impressao.document.getElementById('inputRatNomeSegrin').value = inputRatNomeSegrin;
    tela_impressao.document.getElementById('TextInputConclusaoCipa').value = TextInputConclusaoCipa;
    tela_impressao.document.getElementById('inputRatNomeCipa').value = inputRatNomeCipa;
    tela_impressao.document.getElementById('inputDataCipa').value = inputDataCipa;

    tela_impressao.document.getElementById('inputRatOutros').value = inputRatOutros;
    tela_impressao.document.getElementById('inputRatTecnicoEnfermagem').value = inputRatTecnicoEnfermagem;
    tela_impressao.document.getElementById('inputRatTestemunha1').value = inputRatTestemunha1;
    tela_impressao.document.getElementById('inputRatTestemunha2').value = inputRatTestemunha2;

    tela_impressao.window.print();


};