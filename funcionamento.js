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
    }
    if(sobrenome==""){
        $("#Sobrenome").addClass("erro");
    }
    if(usuario==""){
        $("#Usuario").addClass("erro");
    }
    if(matricula==""){
        $("#Matricula").addClass("erro");
    }
    if(email==""){
        $("#E-mail").addClass("erro");
    }
    if(senha==""){
        $("#Senha").addClass("erro");
    }
    if(confirmarSenha==""){
        $("#ConfirmarSenha").addClass("erro");
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
    if(lsenha==""){
        $("#lsenha").addClass("erro");
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
