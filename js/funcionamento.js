// usuario e senha suspenso em ajax -> mudar para xml
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
    if(lusuario !="" && lsenha != ""){
        $.ajax({

        type: "POST",
        url: "php/login.php",
        dataType: "json",
        data: {
            usuario: lusuario,
            senha: lsenha
        },
        success:(function(retorno){
            var emailxml = "";
            emailxml += retorno.email;
            var senhaxml = "";
            senhaxml += retorno.senha;
            
            if (lusuario == emailxml && lsenha == senhaxml){
                $(location).attr('href', 'sites/projeto.html');
            }
        })
        })
    }
}

//cadastro na pagina de login
$(document).ready(function(){
    $("#botao2").click(function(){
        $(location).attr('href', 'sites/cadastro.html');

    });
});
// função do botão cancelar em login
$(document).ready(function(){
    $("#cancelar").click(function(){
        $(location).attr('href', '../index.html');
    });
});
