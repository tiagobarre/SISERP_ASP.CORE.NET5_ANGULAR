document.getElementById('btnImprimir').onclick = function () {
    var conteudo = document.getElementById('tbl').innerHTML
    var inputNome = document.getElementById('inputNome').value
    var inputIdade = document.getElementById('inputIdade').value
    var inputCPF = document.getElementById('inputCPF').value
    var inputRiscos = document.getElementById('inputRiscos').value
    var inputCarteira = document.getElementById('inputCarteira').value
    var inputSerie = document.getElementById('inputSerie').value
    var inputRG = document.getElementById('inputRG').value
    var inputFuncao = document.getElementById('inputFuncao').value
    var data1 = document.getElementById('data1').value
    var data2 = document.getElementById('data2').value
    var data3 = document.getElementById('data3').value
    var data4 = document.getElementById('data4').value
    var data5 = document.getElementById('data5').value
    var data6 = document.getElementById('data6').value
    var data7 = document.getElementById('data7').value
    var data8 = document.getElementById('data8').value
    var data9 = document.getElementById('data9').value
    var data10 = document.getElementById('data10').value
    var data11 = document.getElementById('data11').value
    var data12 = document.getElementById('data12').value
    var data13 = document.getElementById('data13').value
    var data14 = document.getElementById('data14').value
    var data15 = document.getElementById('data15').value
    var data16 = document.getElementById('data16').value
    var data17 = document.getElementById('data17').value
    var data18 = document.getElementById('data18').value
    var data19 = document.getElementById('data19').value
    var data20 = document.getElementById('data20').value
    var data21 = document.getElementById('data21').value
    var inputNome2 = document.getElementById('inputNome2').value
    var data22 = document.getElementById('data22').value



    var observacoes = document.getElementById('observacoes').value
    var basic_checkbox_1 = document.getElementById('basic_checkbox_1').checked;
    var basic_checkbox_2 = document.getElementById('basic_checkbox_2').checked;
    var basic_checkbox_3 = document.getElementById('basic_checkbox_3').checked;
    var basic_checkbox_4 = document.getElementById('basic_checkbox_4').checked;
    var basic_checkbox_5 = document.getElementById('basic_checkbox_5').checked;
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




    tela_impressao = window.open('about:blank');


    tela_impressao.document.write(conteudo);
    tela_impressao.document.getElementById('inputNome').value = inputNome;
    tela_impressao.document.getElementById('inputIdade').value = inputIdade;
    tela_impressao.document.getElementById('inputCPF').value = inputCPF;
    tela_impressao.document.getElementById('inputRiscos').value = inputRiscos;
    tela_impressao.document.getElementById('inputCarteira').value = inputCarteira;
    tela_impressao.document.getElementById('inputSerie').value = inputSerie;
    tela_impressao.document.getElementById('inputRG').value = inputRG;
    tela_impressao.document.getElementById('inputFuncao').value = inputFuncao;
    tela_impressao.document.getElementById('data1').value = data1;
    tela_impressao.document.getElementById('data2').value = data2;
    tela_impressao.document.getElementById('data3').value = data3;
    tela_impressao.document.getElementById('data4').value = data4;
    tela_impressao.document.getElementById('data5').value = data5;
    tela_impressao.document.getElementById('data6').value = data6;
    tela_impressao.document.getElementById('data7').value = data7;
    tela_impressao.document.getElementById('data8').value = data8;
    tela_impressao.document.getElementById('data9').value = data9;
    tela_impressao.document.getElementById('data10').value = data10;
    tela_impressao.document.getElementById('data11').value = data11;
    tela_impressao.document.getElementById('data12').value = data12;
    tela_impressao.document.getElementById('data13').value = data13;
    tela_impressao.document.getElementById('data14').value = data14;
    tela_impressao.document.getElementById('data15').value = data15;
    tela_impressao.document.getElementById('data16').value = data16;
    tela_impressao.document.getElementById('data17').value = data17;
    tela_impressao.document.getElementById('data18').value = data18;
    tela_impressao.document.getElementById('data19').value = data19;
    tela_impressao.document.getElementById('data20').value = data20;
    tela_impressao.document.getElementById('data21').value = data21;
    tela_impressao.document.getElementById('data22').value = data22;
    tela_impressao.document.getElementById('inputNome2').value = inputNome2;
    tela_impressao.document.getElementById('observacoes').value = observacoes;
    tela_impressao.document.getElementById('basic_checkbox_1').checked = basic_checkbox_1;
    tela_impressao.document.getElementById('basic_checkbox_2').checked = basic_checkbox_2;
    tela_impressao.document.getElementById('basic_checkbox_3').checked = basic_checkbox_3;
    tela_impressao.document.getElementById('basic_checkbox_4').checked = basic_checkbox_4;
    tela_impressao.document.getElementById('basic_checkbox_5').checked = basic_checkbox_5;
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

    tela_impressao.window.print();


};