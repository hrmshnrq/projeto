$(document).ready(function(){
    $("#salvar").click(function(){
        fLocalValidaCampos();
    });
});

function fLocalValidaCampos (){
    var nome = $("#Nome").val();
    var sobrenome = $("#Sobrenome").val();
    var email = $("#E-mail").val();
    var matricula = $("#Matricula").val();
    var usuario = $("#Usuario").val();
    var senha = $("#Senha").val();
    var confirmarSenha = $("#ConfirmarSenha").val();

    if(nome==""){
        $("#Nome").addClass("erro");
        else {
            $("#Nome").removeClass("erro");
        }
    }
    if(sobrenome==""){
        $("#Sobrenome").addClass("erro");
    }        
        else {
            $("#Nome").removeClass("erro");
    }
    if(usuario==""){
        $("#Usuario").addClass("erro");
    }
        else {
            $("#Nome").removeClass("erro");
    }
    if(matricula==""){
        $("#Matricula").addClass("erro");
    }
        else {
            $("#Nome").removeClass("erro");
    }
    if(email==""){
        $("#E-mail").addClass("erro");
    }
         else {
           $("#Nome").removeClass("erro");
    }
    if(senha==""){
        $("#Senha").addClass("erro");
    }
        else {
            $("#Nome").removeClass("erro");
    }
    if(confirmarSenha==""){
        $("#ConfirmarSenha").addClass("erro");
    }
         else {
           $("#Nome").removeClass("erro");
    }
    if(usuario !="" && senha !="" && email !="" && confirmarSenha!="" && matricula!="" && sobrenome !="" && nome !=""){
        $(location).attr('href', '../login.html');
    }
}


$(document).ready(function(){
    $("#botao1").click(function(){
        validalogin();
    });
});

function validalogin (){
    var lusuario = $("#lusuario").val();
    var lsenha = $("#lsenha").val();
    if(lusuario==""){
        $("#lusuario").addClass("erro");
    }
         else {
           $("#Nome").removeClass("erro");
    }
    if(lsenha==""){
        $("#lsenha").addClass("erro");
    }
         else {
           $("#Nome").removeClass("erro");
    }
    if(lusuario !="" && lsenha !=""){
        $(location).attr('href', 'sites/projeto.html');
    }
}

$(document).ready(function(){
    $("#botao2").click(function(){
        passarpagina1();
    });
});
function passarpagina1 (){
    $(location).attr('href', 'sites/cadastro.html');
}

$(document).ready(function(){
    $("#cancelar").click(function(){
        passarpagina2();
    });
});
function passarpagina2 (){
    $(location).attr('href', '../login.html');
}
