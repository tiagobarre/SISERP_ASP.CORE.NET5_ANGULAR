
function CarregarUsuarioLogado() {

   
    var nome = '@HttpContextAccessor.HttpContext.Session.GetString("NomeUsuarioLogado")';


    if (nome != "") {
        var divNome = document.getElementById("NomeUsuarioLogado");


        divNome.innerHTML = nome;


    }


    else {
        window.location.href = '../Usuario/Login';
    }

}

